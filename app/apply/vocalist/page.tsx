
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

function MyComponent({
  formData,
  setFormData,
  handleProfession,
  handleSubmit,
}: {
  formData: {
    name: string;
    age: string;
    phone: string;
    profession: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleProfession: (value: string) => void;
  handleSubmit: () => void;
}) {
  const [hoveredSinger, setHoveredSinger] = useState(false);
  const [hoveredVocalist, setHoveredVocalist] = useState(false);

  return (
    <div className="max-w-xl -mt-8 mx-auto p-6 ">
      <div className="flex justify-center items-center">
        <div
          className="bg-black/70 mr-8 shadow-lg mt-10 mb-8 p-4 h-108"
          style={{ width: '115%', maxWidth: '600px', minWidth: '280px' }}
        >
          <h2
            className="text-3xl ml-40 mt-2 mb-4 text-white font-semibold"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px' }}
          >
            Vocalist
          </h2>

          {/* Name Input */}
          <div className="text-white ml-18">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value)) {
                  setFormData((prev: any) => ({ ...prev, name: value }));
                }
              }}
              maxLength={20}
            />
          </div>

          {/* Age Input */}
          <div className="text-white mt-2 ml-18">
            <Label htmlFor="age">Age</Label>
            <Input
              type="text"
              name="age"
              value={formData.age}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,2}$/.test(value)) {
                  setFormData((prev: any) => ({ ...prev, age: value }));
                }
              }}
              maxLength={2}
              inputMode="numeric"
            />
          </div>

          {/* Phone Input */}
          <div className="text-white mt-2 ml-18">
            <Label htmlFor="phone">Phone No.</Label>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,11}$/.test(value)) {
                  setFormData((prev: any) => ({ ...prev, phone: value }));
                }
              }}
              inputMode="numeric"
              pattern="\d*"
            />
          </div>

          {/* Profession Select */}
          <div className="text-white mt-2 mb-4 ml-18">
            <Label htmlFor="profession">Profession</Label>
            <Select onValueChange={handleProfession}>
              <SelectTrigger style={{ width: '75%' }}>
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
          <div className="ml-18">
            <Button onClick={handleSubmit} style={{ width: '75%' }}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
  const [formData, setFormData] = useState({
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
        },
      });
      return;
    }

    toast.success('Your data has been submitted!', {
      style: {
        fontFamily: 'Dancing Script, cursive',
        fontSize: '18px',
        color: '#fff',
        backgroundColor: '#111',
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
