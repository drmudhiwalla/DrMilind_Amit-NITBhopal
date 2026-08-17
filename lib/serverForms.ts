import nodemailer from "nodemailer";
const buckets=new Map<string,{count:number;reset:number}>();
export function allowed(ip:string){const now=Date.now();const hit=buckets.get(ip);if(!hit||hit.reset<now){buckets.set(ip,{count:1,reset:now+15*60_000});return true}if(hit.count>=5)return false;hit.count++;return true}
export function clean(value:unknown,max=800){return String(value??'').replace(/[<>\u0000-\u001F]/g,' ').replace(/\s+/g,' ').trim().slice(0,max)}
export function validPhone(value:string){return /^[0-9+ ()-]{8,18}$/.test(value)}
export function validEmail(value:string){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)&&value.length<=150}
export async function sendClinicEmail(subject:string,text:string){const {SMTP_HOST,SMTP_PORT,SMTP_USER,SMTP_PASSWORD,CLINIC_EMAIL}=process.env;if(!SMTP_HOST||!SMTP_PORT||!SMTP_USER||!SMTP_PASSWORD||!CLINIC_EMAIL)return false;const transport=nodemailer.createTransport({host:SMTP_HOST,port:Number(SMTP_PORT),secure:Number(SMTP_PORT)===465,auth:{user:SMTP_USER,pass:SMTP_PASSWORD}});await transport.sendMail({from:SMTP_USER,to:CLINIC_EMAIL,replyTo:SMTP_USER,subject,text});return true}
