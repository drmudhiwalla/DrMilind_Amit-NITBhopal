"use client";

import { ChevronDown, Check } from "lucide-react";
import { KeyboardEvent, useEffect, useId, useRef, useState } from "react";

type SelectFieldProps = {
  name: string;
  label: string;
  options: readonly string[];
  values?: readonly string[];
};

export default function SelectField({ name, label, options, values }: SelectFieldProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const fieldRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!fieldRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function resetSelection() { setSelectedIndex(0); setOpen(false); }
    const form = fieldRef.current?.closest("form");
    document.addEventListener("pointerdown", closeOutside);
    form?.addEventListener("reset", resetSelection);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      form?.removeEventListener("reset", resetSelection);
    };
  }, []);

  function choose(index: number) {
    setSelectedIndex(index);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") { setOpen(false); return; }
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setOpen((value) => !value); return; }
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const next = (selectedIndex + direction + options.length) % options.length;
      setSelectedIndex(next);
      setOpen(true);
    }
  }

  const submittedValue = values?.[selectedIndex] ?? options[selectedIndex];

  return <div className="field custom-select" ref={fieldRef}>
    <label id={`${listId}-label`} htmlFor={`${listId}-button`}>{label}</label>
    <input type="hidden" name={name} value={submittedValue} />
    <button ref={buttonRef} id={`${listId}-button`} className="select-trigger" type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={`${listId}-list`} aria-labelledby={`${listId}-label ${listId}-button`} onClick={() => setOpen((value) => !value)} onKeyDown={handleKeyDown}>
      <span>{options[selectedIndex]}</span><ChevronDown size={18} aria-hidden="true" />
    </button>
    {open && <div id={`${listId}-list`} className="select-options" role="listbox" aria-labelledby={`${listId}-label`}>
      {options.map((option, index) => <button type="button" role="option" aria-selected={index === selectedIndex} className={index === selectedIndex ? "selected" : ""} key={`${option}-${index}`} onClick={() => choose(index)}>
        <span>{option}</span>{index === selectedIndex && <Check size={17} aria-hidden="true" />}
      </button>)}
    </div>}
    <style>{`.custom-select{position:relative}.select-trigger{width:100%;min-height:48px;border:1px solid #afc8c6;border-radius:8px;padding:.7rem .8rem;background:white;color:#17333d;display:flex;align-items:center;justify-content:space-between;gap:10px;text-align:left;cursor:pointer}.select-trigger span,.select-options span{min-width:0;overflow-wrap:anywhere}.select-trigger svg{flex:none}.select-options{position:absolute;z-index:35;top:calc(100% + 5px);left:0;right:0;width:100%;max-width:100%;max-height:min(280px,45vh);overflow-y:auto;background:white;border:1px solid #afc8c6;border-radius:8px;padding:5px;box-shadow:0 14px 32px rgba(8,47,61,.18)}.select-options button{width:100%;min-height:44px;border:0;border-radius:6px;padding:9px 10px;background:white;color:#17333d;display:flex;align-items:center;justify-content:space-between;gap:8px;text-align:left;cursor:pointer}.select-options button:hover,.select-options button:focus-visible,.select-options button.selected{background:#e9f7f5;color:#075f5b}.select-options svg{flex:none}@media(max-width:520px){.select-trigger{min-height:46px;padding:.68rem .7rem}.select-options{max-height:min(240px,42vh)}}`}</style>
  </div>;
}
