import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Autocomplete,
  Checkbox,
  Button
} from '@mui/material';

export default function ConsultationForm() {
  const subjectOptions = ["General Inquiry", "Seeking Therapy/Counseling", "Mental Health Concern", "Feedback/Suggestions", "Technical Support"];
  const mentalHealthConcernsOptions = ["Anxiety", "Depression", "Stress Management", "Relationship Issues", "Sleep Problems", "Workplace Stress"];

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    subject: '',
    preferred_contact_method: '',
    mental_health_concerns: '',
    consulted_before: '',
    preferred_mode_of_therapy: '',
    best_contact_time: '',
    problem_description: '',
    agree_to_policy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/form/consultationForm/create/', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.status === 200 || response.status === 201) {
        alert('Consultation Form Submitted Successfully!');
        console.log(response.data);
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          age: '',
          gender: '',
          subject: '',
          preferred_contact_method: '',
          mental_health_concerns: '',
          consulted_before: '',
          preferred_mode_of_therapy: '',
          best_contact_time: '',
          problem_description: '',
          agree_to_policy: false
        });
      } else {
        alert('Something went wrong while submitting the form.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred while submitting the form.');
    }
  };
  

  return (
    <div className='w-screen h-full flex items-center justify-center bg-amber-50'>
      <div className='bg-white w-[60vw] mt-[2rem] mb-[3rem] shadow-md rounded-md'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-y-[1.5rem] px-[2rem] pt-[1rem] pb-[2.5rem]'>
          <h1 className='text-[30px] font-medium text-center'>Basic Contact and Mental Health Consultation Form</h1>

          <TextField name="full_name" label="Full Name" value={formData.full_name} onChange={handleChange} fullWidth />
          <TextField name="email" label="Email Address" value={formData.email} onChange={handleChange} fullWidth />
          <TextField name="phone" label="Phone Number" value={formData.phone} onChange={handleChange} fullWidth />
          <TextField name="age" type="number" label="Age" value={formData.age} onChange={handleChange} fullWidth />

          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            options={subjectOptions}
            value={formData.subject}
            onChange={(e, newValue) => setFormData({ ...formData, subject: newValue })}
            renderInput={(params) => <TextField {...params} label="Subject" />}
          />

          <FormControl>
            <FormLabel>Preferred Contact Method</FormLabel>
            <RadioGroup row name="preferred_contact_method" value={formData.preferred_contact_method} onChange={handleChange}>
              <FormControlLabel value="email" control={<Radio />} label="Email" />
              <FormControlLabel value="phone" control={<Radio />} label="Phone" />
              <FormControlLabel value="whatsapp" control={<Radio />} label="WhatsApp" />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            options={mentalHealthConcernsOptions}
            value={formData.mental_health_concerns}
            onChange={(e, newValue) => setFormData({ ...formData, mental_health_concerns: newValue })}
            renderInput={(params) => <TextField {...params} label="Mental Health Concerns" />}
          />

          <FormControl>
            <FormLabel>Have You Consulted a Therapist Before?</FormLabel>
            <RadioGroup row name="consulted_before" value={formData.consulted_before} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Preferred Mode of Therapy</FormLabel>
            <RadioGroup row name="preferred_mode_of_therapy" value={formData.preferred_mode_of_therapy} onChange={handleChange}>
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="in-person" control={<Radio />} label="In-person" />
              <FormControlLabel value="not_sure_yet" control={<Radio />} label="Not sure yet" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Best Time to Contact You</FormLabel>
            <RadioGroup row name="best_contact_time" value={formData.best_contact_time} onChange={handleChange}>
              <FormControlLabel value="morning" control={<Radio />} label="Morning" />
              <FormControlLabel value="afternoon" control={<Radio />} label="Afternoon" />
              <FormControlLabel value="evening" control={<Radio />} label="Evening" />
            </RadioGroup>
          </FormControl>

          <TextField
            name="problem_description"
            label="Describe your problem"
            multiline
            rows={4}
            value={formData.problem_description}
            onChange={handleChange}
            fullWidth
          />

          <FormControlLabel
            control={<Checkbox checked={formData.agree_to_policy} onChange={handleChange} name="agree_to_policy" />}
            label="I agree to the privacy policy and consent to being contacted."
          />

          <Button type="submit" variant="contained"  disabled={!formData.agree_to_policy} sx={{ width: '10rem', height: '2.7rem', fontSize: '16px', alignSelf: 'center' }}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
