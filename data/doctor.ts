export const doctor = {
  name: "Dr. Milind Mandwar",
  shortName: "Dr. Milind",
  designation: "Consultant – Liver, Kidney & Pancreas Transplant and HPB Surgery",
  mobileDesignation: "Organ Transplant & HPB Surgeon",
  currentRole: "Consultant, Organ Transplant and HPB Surgery",
  hospital: "Ruban Memorial Hospital",
  location: "Patna, Bihar",
  phoneDisplay: "+91 81206 50418",
  phone: "+918120650418",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918120650418",
  email: "amit2003dh@gmail.com",
  linkedin: "https://www.linkedin.com/in/milind-mandwar-415a65166",
  instagram: "https://www.instagram.com/milindmandwar",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://drmilindmandwar.com",
  consultationNotice: "Consultations in Patna and online—call or WhatsApp to confirm availability.",
  timings: {
    hospital: { label: "Hospital consultation timings available on call.", verificationRequired: true },
    online: { morning: "9:00 AM–11:00 AM", evening: "5:00 PM–7:00 PM", verificationRequired: true }
  },
  about: [
    "I am a Consultant in Organ Transplant and HPB Surgery at Ruban Memorial Hospital, Patna. My clinical work focuses on liver, kidney and pancreas transplantation, hepatopancreatobiliary surgery and dialysis vascular-access procedures.",
    "I completed my MBBS at Gauhati Medical College and Hospital and my MS in General Surgery at the All India Institute of Medical Sciences, New Delhi. I then completed three years of senior residency in renal and pancreas transplantation and vascular-access surgery at PGIMER, Chandigarh.",
    "I pursued further training in abdominal-organ transplantation at IKDRC-ITS, Ahmedabad, followed by a fellowship in liver transplant and HPB surgery at BLK-Max Super Speciality Hospital, New Delhi. Before joining Ruban Memorial Hospital, I worked as an Associate Consultant in Liver Transplant at Fortis Hospital, Mohali.",
    "My experience includes living-donor and deceased-donor transplantation, ABO-incompatible and swap transplantation, paediatric transplantation, complex liver resections, pancreatic surgery, Whipple procedures, bile-duct surgery and dialysis vascular-access procedures. I believe every patient, donor and family deserves careful evaluation, clear communication and well-coordinated care throughout their treatment journey."
  ],
  stats: [
    { value: "400+", label: "Liver transplants" }, { value: "750+", label: "Kidney transplants" },
    { value: "1,000+", label: "Vascular-access surgeries" }, { value: "8+ years", label: "Postgraduate surgical & transplant experience" }
  ],
  statsNote: "Figures include procedures performed and assisted as part of multidisciplinary transplant teams. Final wording and current figures should be confirmed by the doctor before publication.",
  qualifications: [
    ["MBBS", "Gauhati Medical College and Hospital, Guwahati"], ["MS, General Surgery", "AIIMS, New Delhi"],
    ["Advanced Laparoscopy Training", "AIIMS, New Delhi"], ["Senior Residency, Renal and Pancreas Transplant", "PGIMER, Chandigarh"],
    ["Abdominal Organ Transplant Fellowship/Training", "IKDRC-ITS, Ahmedabad"], ["Fellowship, Liver Transplant and HPB Surgery", "BLK-Max Super Speciality Hospital, New Delhi"]
  ],
  experience: [
    {role:"Consultant, Organ Transplant and HPB Surgery",place:"Ruban Memorial Hospital, Patna",period:"October 2025–Present"},
    {role:"Associate Consultant, Liver Transplant",place:"Fortis Hospital, Mohali",period:"January 2024–November 2025"},
    {role:"Fellow, Liver Transplant and HPB Surgery",place:"BLK-Max Super Speciality Hospital, New Delhi",period:"January 2023–December 2023"},
    {role:"Fellow, Abdominal Organ Transplant",place:"IKDRC-ITS, Ahmedabad",period:"July 2022–December 2022"},
    {role:"Senior Resident, Renal and Pancreas Transplantation and Vascular Access Surgery",place:"PGIMER, Chandigarh",period:"July 2019–June 2022"},
    {role:"MS General Surgery Residency",place:"All India Institute of Medical Sciences, New Delhi",period:"July 2016–June 2019"},
    {role:"MBBS",place:"Gauhati Medical College and Hospital, Guwahati",period:"August 2010–February 2016"}
  ],
  specialties: [
    {title:"Liver Transplantation",items:["Living-donor liver transplant","Deceased-donor liver transplant","ABO-incompatible transplantation","Paediatric liver transplant","Recipient and donor evaluation","Post-transplant surgical follow-up"]},
    {title:"Kidney & Pancreas Transplantation",items:["Living-donor kidney transplant","Deceased-donor kidney transplant","Swap kidney transplant","ABO-incompatible kidney transplant","Pancreas transplantation","Complex transplant evaluation"]},
    {title:"Liver & HPB Surgery",items:["Liver tumours and major liver resections","Pancreatic tumours and pancreatic surgery","Whipple procedure","Bile-duct surgery","Gallbladder and biliary disease","Complex hepatobiliary surgery"]},
    {title:"Dialysis & Vascular Access",items:["AV fistula creation","AV graft procedures","Dialysis catheter procedures","Ultrasound-guided vascular access","Failed vascular-access evaluation and management"]}
  ],
  memberships: ["Member, International Liver Transplantation Society","Member, Indian Society of Organ Transplantation","Member, Liver Transplant Society of India","Research publications and participation in national and international conferences","Training in ultrasound-guided vascular-access procedures"],
  achievements: [{text:"Associated with Punjab’s first deceased-donor liver transplant and ABO-incompatible liver transplant.",verificationRequired:true}],
  locations: [
    {name:"Ruban Memorial Hospital",address:"Patna, Bihar",note:"Please call or WhatsApp the doctor’s team to confirm the current OPD schedule.",mapsUrl:"https://www.google.com/maps/search/?api=1&query=Ruban+Memorial+Hospital+Patna",confirmed:true},
    {name:"Dr. Milind Mandwar",address:"19, Boring Patliputra Road, Near New Patliputra Colony, Patna, Bihar 800013",note:"Additional Patna consultation location—please call to confirm availability.",mapsUrl:"https://www.google.com/maps/search/?api=1&query=19+Boring+Patliputra+Road+Patna+800013",confirmed:false}
  ],
  faqs: [
    ["What conditions does Dr. Milind Mandwar treat?","He evaluates transplant recipients and donors and treats conditions requiring liver, kidney or pancreas transplantation, HPB surgery, and dialysis vascular access."],
    ["How can I book an appointment?","Submit an appointment request on this website, call the team, or send a WhatsApp request."],
    ["Is online consultation available?","Yes. Online consultations are offered subject to availability; please call or WhatsApp to confirm."],
    ["Where does Dr. Milind practice?","Dr. Milind currently practises at Ruban Memorial Hospital in Patna, Bihar. Current OPD schedules should be confirmed by phone."],
    ["What records should I bring to my consultation?","Bring recent prescriptions, discharge summaries, investigation reports, imaging and a current medicine list. Do not send sensitive records through the initial website form."],
    ["How is a transplant patient evaluated?","Evaluation is multidisciplinary and may include medical, surgical, anaesthetic and psychosocial assessment. The exact process depends on the organ and patient."],
    ["Can family members enquire on behalf of a patient?","Yes, with the patient’s knowledge and consent wherever possible."],
    ["Is submitting the appointment form a confirmed booking?","No. An appointment is confirmed only after the doctor’s team responds and confirms availability."],
    ["What should I do in an emergency?","Go to the nearest emergency department or call the appropriate emergency service. Do not use website forms for emergencies."]
  ],
  articles: [
    {
      title: "Understanding liver transplantation",
      summary: "Liver transplantation replaces a severely diseased or damaged liver with a healthy donor liver. It may be considered when other treatments cannot adequately manage advanced liver disease or selected liver tumours.",
      points: ["Evaluation involves medical tests, imaging and review by a multidisciplinary transplant team.", "A donor liver may come from a deceased donor or, in suitable cases, a living donor.", "Recovery requires regular follow-up and medicines that help prevent organ rejection."],
    },
    {
      title: "Living-donor liver transplant: what families should know",
      summary: "In living-donor liver transplantation, a carefully selected healthy adult donates part of the liver. The transplanted portion and the donor's remaining liver can grow after surgery.",
      points: ["The donor and recipient undergo separate, detailed assessments.", "Donation must be voluntary and informed, with donor safety treated as a central priority.", "Both operations are major procedures with risks, recovery needs and long-term follow-up."],
    },
    {
      title: "Preparing for kidney transplantation",
      summary: "Kidney-transplant preparation helps the team understand whether transplantation is appropriate and whether surgery and long-term treatment can be undertaken safely.",
      points: ["Assessment may include blood tests, heart and lung evaluation, imaging and infection screening.", "Bring an updated medicine list, previous records and details of dialysis treatment to appointments.", "Patients and families should plan for medicines, follow-up tests, transport and support after surgery."],
    },
    {
      title: "Caring for an AV fistula",
      summary: "An arteriovenous fistula provides vascular access for haemodialysis. Protecting it and noticing changes early can help maintain safe and reliable dialysis access.",
      points: ["Check daily for the usual vibration, often called a thrill, as instructed by your dialysis team.", "Avoid blood-pressure measurements, blood sampling, tight clothing or heavy pressure on the fistula arm.", "Contact your dialysis team promptly for bleeding, swelling, redness, warmth, worsening pain or loss of the usual vibration."],
    },
    {
      title: "When does a liver tumour require surgery?",
      summary: "Surgery may be considered for selected liver tumours, but the decision depends on the tumour and the health and function of the remaining liver.",
      points: ["Assessment commonly considers tumour type, size, number, location and involvement of nearby blood vessels.", "The team also evaluates liver function, other illnesses and whether enough healthy liver can safely remain.", "Possible approaches may include liver resection or transplantation; other treatments may be more appropriate in some cases."],
    },
    {
      title: "Life after an organ transplant",
      summary: "Transplantation begins a long-term partnership with the transplant team. Medicines, monitoring and healthy daily routines all help protect the transplanted organ.",
      points: ["Take anti-rejection medicines exactly as prescribed and never change them without medical advice.", "Attend scheduled clinic visits and laboratory tests, even when feeling well.", "Seek timely advice about fever, possible infection, medicine problems or any new or worsening symptoms."],
    },
  ]
} as const;

// All consultation locations and timings require final confirmation before launch.
