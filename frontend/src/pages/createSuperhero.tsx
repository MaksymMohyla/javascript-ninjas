import DefaultLayout from '@/layouts/default';
import { Superhero } from '@/utils/types/superhero';
import { Button } from '@heroui/button';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '@/features/superhero/SuperheroApi';

const fields = [
  'Nickname',
  'Real Name',
  'Origin Description',
  'Superpowers',
  'Catch Phrase',
];

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
  const [loading, setLoading] = useState(false);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    const imgError = getUrlError(formData.images[0]);
    if (imgError) {
      newErrors.image = imgError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    setLoading(true);
    await api.createSuperhero(formData);

    setErrors({});
    setLoading(false);
    alert(`Superhero ${formData.nickname} created successfully!`);
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
              name={field}
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

          <Input
            isRequired
            errorMessage={({ validationDetails }) => {
              if (validationDetails.valueMissing) {
                return `Image URL cannot be blank`;
              }
              return getUrlError(formData.images[0]);
            }}
            label="Profile Image URL"
            labelPlacement="outside"
            name="image"
            placeholder={`Enter image URL`}
            type="text"
            value={formData.images[0]}
            onChange={(e) => {
              setFormData({ ...formData, images: [e.target.value] });
            }}
          />
        </div>
        <Button
          type="submit"
          color="primary"
          className="w-full max-w-[120px] mx-auto"
          isLoading={loading}
        >
          Submit
        </Button>
      </Form>
    </DefaultLayout>
  );
}
