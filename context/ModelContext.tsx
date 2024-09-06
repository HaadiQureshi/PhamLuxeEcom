import { ALL_APPLE_PHONE_MODELS } from '@/constant';
import { ModelType } from '@/interface';
import { createContext, useState } from 'react';

interface Model {
  phoneModel: ModelType;
  setPhoneModel: (phoneModel: ModelType) => void;
}

const ModelContext = createContext<Model>({
  phoneModel: { id: '', name: '', handle: '' },
  setPhoneModel: () => {},
});

export const useModelState = (): Model => {
  const [phoneModel, setPhoneModel] = useState<ModelType>(
    ALL_APPLE_PHONE_MODELS[0]
  );

  return { phoneModel, setPhoneModel };
};

export default ModelContext;
