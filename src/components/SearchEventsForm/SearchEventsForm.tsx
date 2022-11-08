import { MagnifyingGlass } from 'phosphor-react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SearchFormContainer } from './styles';

export type SearchEventsFormData = {
  search: string;
};

export interface SearchEventsFormProps {
  onSubmit?: (data: SearchEventsFormData) => void;
  value?: string;
}

export const SearchEventsForm = ({
  onSubmit,
  value = '',
}: SearchEventsFormProps) => {
  const { register, handleSubmit } = useForm<SearchEventsFormData>({
    defaultValues: {
      search: value,
    },
  });

  const searchSubmit: SubmitHandler<SearchEventsFormData> = (data) => {
    onSubmit?.(data);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(searchSubmit)}>
      <h2>Qual a boa hoje?</h2>
      <div>
        <input placeholder="Encontre um evento" {...register('search')} />
        <button type="submit" title="Buscar por eventos">
          <MagnifyingGlass size={24} />
        </button>
      </div>
    </SearchFormContainer>
  );
};
