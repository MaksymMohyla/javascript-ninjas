import { SuperheroContext } from '@/features/superhero/SuperheroContext';
import DefaultLayout from '@/layouts/default';
import { Button } from '@heroui/button';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '@/features/superhero/SuperheroApi';
import { Loader } from '@/components/Loader.tsx';
import ImageWithButtons from '@/components/imageWithButtons';
import SuperHeroDetailLine from '@/components/supeheroDetailLine';
import { useDisclosure } from '@heroui/modal';
import EditModal from '@/components/editModal';
import { ModalName } from '@/types/modalNames';
import { Superhero } from '@/utils/types/superhero';

export default function SuperHeroDetails() {
  const { id } = useParams();
  const { selectedSuperhero, setSelectedSuperhero } =
    useContext(SuperheroContext);

  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(true);
  const [modalName, setModalName] = useState<ModalName>('');
  const [inputValue, setInputValue] = useState('');

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  useEffect(() => {
    (async function fetchHero() {
      setIsPageLoading(true);
      const superhero = await api.getSuperhero(id || '1');
      setSelectedSuperhero(superhero || null);
      setIsPageLoading(false);
    })();
  }, [id]);

  function handleOpenModal(type: ModalName, value: string) {
    onOpen();
    setModalName(type);
    setInputValue(value);
  }

  const handleDeletePhoto = useCallback(
    async (imageIndex: number) => {
      if (!selectedSuperhero) return;

      const confirmDelete = window.confirm(
        'Are you sure you want to delete this photo?'
      );

      if (!confirmDelete) return;

      const updatedImages = selectedSuperhero.images.filter(
        (_, index) => index !== imageIndex
      );

      const updatedSuperhero = await api.updateSuperhero(selectedSuperhero.id, {
        images: updatedImages,
      });

      setSelectedSuperhero(updatedSuperhero || null);
      alert('Photo deleted successfully!');
    },
    [selectedSuperhero, setSelectedSuperhero]
  );

  async function handleSubmitChange(id: Superhero['id']) {
    setIsSubmitLoading(true);
    const dataToUpdate: Partial<Superhero> = {};
    switch (modalName) {
      case 'Add photo':
        dataToUpdate.images = [
          ...(selectedSuperhero?.images || []),
          inputValue,
        ];
        break;
      case 'Change nickname':
        dataToUpdate.nickname = inputValue;
        break;
      case 'Change real name':
        dataToUpdate.real_name = inputValue;
        break;
      case 'Change origin description':
        dataToUpdate.origin_description = inputValue;
        break;
      case 'Change superpowers':
        dataToUpdate.superpowers = inputValue;
        break;
      case 'Change catch phrase':
        dataToUpdate.catch_phrase = inputValue;
        break;
    }

    const updatedSuperhero = await api.updateSuperhero(id, dataToUpdate);
    setSelectedSuperhero(updatedSuperhero || null);
    setIsSubmitLoading(false);
    alert(`Successfully updated superhero ${updatedSuperhero?.nickname}!`);
    onClose();
  }

  return isPageLoading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <EditModal
        isOpen={isOpen}
        isSubmitLoading={isSubmitLoading}
        onOpenChange={onOpenChange}
        name={modalName}
        onSubmit={() => handleSubmitChange(selectedSuperhero?.id || '')}
        value={inputValue}
        setValue={setInputValue}
      />

      <section className="container mx-auto p-4">
        <div className="mb-4 flex gap-4 flex-col align-middle md:flex-row">
          {selectedSuperhero?.images?.map((image, index) => (
            <ImageWithButtons
              key={index}
              image={image}
              index={index}
              nickname={selectedSuperhero.nickname}
              isButtonsVisible={isButtonsVisible}
              onPhotoDelete={handleDeletePhoto}
            />
          ))}
        </div>

        <Button
          color="secondary"
          className="block w-full max-w-60 mx-auto mb-2"
          onPress={() =>
            handleOpenModal('Add photo', selectedSuperhero?.images[0] || '')
          }
        >
          Add photo
        </Button>
        <Button
          color="secondary"
          className="block w-full max-w-60 mx-auto mb-8"
          onPress={() => setIsButtonsVisible(!isButtonsVisible)}
        >
          {`${isButtonsVisible ? 'Hide' : 'Show'} control buttons`}
        </Button>

        <ul className="space-y-6">
          <SuperHeroDetailLine
            isButtonsVisible={isButtonsVisible}
            name="Nickname"
            value={selectedSuperhero?.nickname}
            onCLick={() =>
              handleOpenModal(
                'Change nickname',
                selectedSuperhero?.nickname || ''
              )
            }
          />
          <SuperHeroDetailLine
            isButtonsVisible={isButtonsVisible}
            name="Real Name"
            value={selectedSuperhero?.real_name}
            onCLick={() =>
              handleOpenModal(
                'Change real name',
                selectedSuperhero?.real_name || ''
              )
            }
          />
          <SuperHeroDetailLine
            isButtonsVisible={isButtonsVisible}
            name="Origin Description"
            value={selectedSuperhero?.origin_description}
            onCLick={() =>
              handleOpenModal(
                'Change origin description',
                selectedSuperhero?.origin_description || ''
              )
            }
          />
          <SuperHeroDetailLine
            isButtonsVisible={isButtonsVisible}
            name="Superpowers"
            value={selectedSuperhero?.superpowers}
            onCLick={() =>
              handleOpenModal(
                'Change superpowers',
                selectedSuperhero?.superpowers || ''
              )
            }
          />
          <SuperHeroDetailLine
            isButtonsVisible={isButtonsVisible}
            name="Catch Phrase"
            value={selectedSuperhero?.catch_phrase}
            onCLick={() =>
              handleOpenModal(
                'Change catch phrase',
                selectedSuperhero?.catch_phrase || ''
              )
            }
          />
        </ul>
      </section>
    </DefaultLayout>
  );
}
