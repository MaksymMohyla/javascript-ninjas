import DefaultLayout from '@/layouts/default';
import { Superhero } from '@/utils/types/superhero';
import { Button } from '@heroui/button';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fields = [
  'Nickname',
  'Real Name',
  'Origin Description',
  'Superpowers',
  'Catch Phrase',
];

const imagesFields = ['Image 1', 'Image 2', 'Image 3'];

export default function CreateSuperhero() {
  const [formData, setFormData] = useState<Omit<Superhero, 'id'>>({
    nickname: '',
    real_name: '',
    origin_description: '',
    superpowers: '',
    catch_phrase: '',
    images: [],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();

  function getUrlError(value: string | undefined) {
    const regex = /^(http:\/\/|https:\/\/).+$/;

    if (String(value).length < 8) {
      return 'URL must be 8 characters or more';
    }
    if (!regex.test(String(value))) {
      return 'Correct URL should start with http:// or https://';
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    formData.images.forEach((image, index) => {
      const error = getUrlError(image);
      if (error) {
        newErrors[`image_${index + 1}`] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    console.log('Form submitted successfully', formData);

    setErrors({});
    alert('Superhero created successfully!');
    navigate('/list');
  }
  return (
    <DefaultLayout>
      <h1 className="font-semibold w-fit mx-auto mb-6">Create a Superhero</h1>
      <Form
        className="w-full justify-center items-center space-y-4 pb-6"
        validationErrors={errors}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
          {fields.map((field) => (
            <Input
              key={field}
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return `${field} cannot be blank`;
                }
              }}
              label={field}
              labelPlacement="outside"
              name={field.toLowerCase().replace(' ', '_')}
              placeholder={`Enter ${field.toLowerCase()}`}
              type="text"
              value={formData[field.toLowerCase().replace(' ', '_')]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [field.toLowerCase().replace(' ', '_')]: e.target.value,
                })
              }
            />
          ))}

          {imagesFields.map((field, index) => (
            <Input
              key={index}
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return `Image URL cannot be blank`;
                }
                return getUrlError(formData.images[index]);
              }}
              label={field}
              labelPlacement="outside"
              name={`image_${index}`}
              placeholder={`Enter image URL`}
              type="text"
              value={formData.images[index] || ''}
              onChange={(e) => {
                const newImages = [...formData.images];
                newImages[index] = e.target.value;
                setFormData({ ...formData, images: newImages });
              }}
            />
          ))}
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full max-w-[120px] mx-auto"
        >
          Submit
        </Button>
      </Form>
    </DefaultLayout>
  );
}
