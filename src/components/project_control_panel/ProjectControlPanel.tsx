import Select, {StylesConfig} from 'react-select'
import Button from '../Button';

const colourStyles: StylesConfig<{ value: string; label: string; }> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "darkcyan"
        : isFocused
        ? "lightgray"
        : undefined,
      color: isDisabled
        ? 'gray'
        : isSelected
        ? "lightgray"
        : isFocused
        ? "black"
        : "black",
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? "cadetblue"
          : undefined,
        color: !isDisabled
          ? "lightgray"
          : "darkgray",
      },
    };
  }
};

export default function ProjectControlPanel() {
    const hardcodedOptions = [
      { value: 'p1', label: 'Project 1' },
      { value: 'p2', label: 'Project 2' },
      { value: 'p3', label: 'Project 3' }
    ]

    return (
      <div className="project-control-panel">
        <Select className='selector' options={hardcodedOptions} styles={colourStyles} />
        <div className="button-group">
          <Button title="+" onClick={()=>{}}/>
          <Button title="-" onClick={()=>{}}/>
          <Button title="Edit" onClick={()=>{}}/>
        </div>
      </div>
    )
}