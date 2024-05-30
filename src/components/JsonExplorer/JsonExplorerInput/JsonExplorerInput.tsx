import { isPresentableValue } from '@/components/JsonExplorer/__helpers__/isPresentableValue';
import StyledInput from '@/components/StyledInput';

import { getValueByPath } from '@/__helpers__/getValueByPath';

interface JsonExplorerInputProps {
  jsonKey: string;
  setJsonKey: (key: string) => void;
  value: string;
  setValue: (value: string) => void;
  data: Record<string, unknown>;
}

const JsonExplorerInput: React.FC<JsonExplorerInputProps> = ({
  jsonKey,
  setJsonKey,
  value,
  setValue,
  data,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJsonKey(e.target.value);
    const extractedValue = getValueByPath(data, e.target.value);
    setValue(
      isPresentableValue(extractedValue)
        ? extractedValue.toString()
        : 'undefined'
    );
  };

  return (
    <StyledInput jsonKey={jsonKey} value={value} handleChange={handleChange} />
  );
};

export default JsonExplorerInput;
