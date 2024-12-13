import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  contactForm!: FormGroup; // FormGroup is a class that tracks the value and validity state of a group of FormControl instances.
  // ! means that the variable will be initialized later and never be null
  
  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  ngOnInit(): void {
    
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;

  }
}
