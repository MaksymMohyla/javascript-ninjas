import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { Dispatch, SetStateAction } from 'react';
import { ModalName } from '@/types/modalNames';

interface EditModalProps {
  isOpen: boolean;
  isSubmitLoading: boolean;
  onOpenChange: (isOpen: boolean) => void;
  name: ModalName;
  onSubmit: () => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export default function EditModal({
  isOpen,
  onOpenChange,
  isSubmitLoading,
  name,
  onSubmit,
  value,
  setValue,
}: EditModalProps) {
  const label =
    name === 'Add photo' ? 'Image URL' : name.split(' ').slice(1).join(' ');

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {`${name}?`}
            </ModalHeader>
            <ModalBody>
              <Form
                className="w-full justify-center items-center space-y-4"
                onSubmit={onSubmit}
              >
                <div className="flex flex-col gap-4 max-w-md">
                  <Input
                    isRequired
                    errorMessage={({ validationDetails }) => {
                      if (
                        validationDetails.valueMissing ||
                        validationDetails.badInput
                      ) {
                        return `Enter some ${label}!`;
                      }
                    }}
                    label={label}
                    labelPlacement="outside"
                    name={label}
                    placeholder={`Enter ${label}`}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                type="submit"
                onPress={onSubmit}
                isLoading={isSubmitLoading}
              >
                Apply
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
