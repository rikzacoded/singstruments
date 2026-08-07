 'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { useState } from 'react';

// Define the FormData type
type FormData = {
  name: string;
  age: string;
  phone: string;
  profession: string;
};

function MyComponent({
  formData,
  setFormData,
  handleProfession,
  handleSubmit,
}: {
  formData: FormData; // Use FormData type here
  setFormData: React.Dispatch<React.SetStateAction<FormData>>; // Use FormData type here
  handleProfession: (value: string) => void;
  handleSubmit: () => void;
}) {
const [hoveredSinger, setHoveredSinger] = useState(false);
const [hoveredVocalist, setHoveredVocalist] = useState(false);

  return (
   <div className="w-full sm:max-w-xl mx-auto px-4 sm:px-0 py-6">
      <div className="flex justify-center items-center ">
    <div
  className="bg-black/70 shadow-lg mt-6 sm:mt-10 md:mt-12 mb-8 p-4 sm:p-6 rounded-lg w-full max-w-[600px]"
>
          <h2
        className="text-center  text-2xl sm:text-3xl md:text-3xl font-semibold text-white mb-6  md:mt-2"
            style={{ fontFamily: 'Poppins, sans-serif', fontSize: '38px' }}
          >
            Vocalist
          </h2>

          {/* Name Input */}
          <div className="text-white mb-4 md:ml-18 md:w-2/3">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  setFormData((prev: FormData) => ({ ...prev, name: value }));
                }
              }}
              maxLength={20}
            />
          </div>

          {/* Age Input */}
          <div className="text-white mb-4 md:ml-18 md:w-2/3">
            <Label htmlFor="age">Age</Label>
            <Input
              type="text"
              name="age"
              value={formData.age}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,2}$/.test(value)) {
                  setFormData((prev: FormData) => ({ ...prev, age: value }));
                }
              }}
              maxLength={2}
              inputMode="numeric"
            />
          </div>

          {/* Phone Input */}
          <div className="text-white mb-4 md:ml-18 md:w-2/3">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,11}$/.test(value)) {
                  setFormData((prev: FormData) => ({ ...prev, phone: value }));
                }
              }}
              inputMode="numeric"
              pattern="\d*"
            />
          </div>

          {/* Profession Select */}
          <div className="text-white mb-6 md:ml-18">
            <Label htmlFor="profession">Profession</Label>
            <Select onValueChange={handleProfession}>
             <SelectTrigger className="w-full md:w-[77%]">
                {formData.profession || 'Select Profession'}
              </SelectTrigger>
             <SelectContent>
  <SelectItem
    value="singer"
    style={{
      backgroundColor: hoveredSinger ? '#424142' : 'transparent',
      transition: 'background-color 0.3s ease',
    }}
    onMouseEnter={() => setHoveredSinger(true)}
    onMouseLeave={() => setHoveredSinger(false)}
  >
    Singer
  </SelectItem>

  <SelectItem
    value="vocalist"
    style={{
      backgroundColor: hoveredVocalist ? '#424142' : 'transparent',
      transition: 'background-color 0.3s ease',
    }}
    onMouseEnter={() => setHoveredVocalist(true)}
    onMouseLeave={() => setHoveredVocalist(false)}
  >
    Vocalist
  </SelectItem>
</SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
        <div className="md:ml-18">
           <Button
                onClick={handleSubmit}
                  className="w-full md:w-[77%]"
                    style={{ backgroundColor: '#311536' }}
                         >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    phone: '',
    profession: '',
  });

  const handleProfession = (value: string) => {
    setFormData((prev) => ({ ...prev, profession: value }));
  };

  const handleSubmit = () => {
    const { name, age, phone, profession } = formData;

    if (!name || !age || !phone || !profession) {
      toast.error('Please fill in all fields before submitting.', {
        style: {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '16px',
          color: '#fff',
         backgroundColor: '#1f0c22',
        },
      });
      return;
    }

    toast.success('Your data has been submitted!', {
      style: {
        fontFamily: 'Poppins,sans-serif',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#311536',
      },
    });

    console.log(formData);
  };

  return (
    <MyComponent
      formData={formData}
      setFormData={setFormData}
      handleProfession={handleProfession}
      handleSubmit={handleSubmit}
    />
  );
}
