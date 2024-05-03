import {styled} from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$inVaild})=> $inVaild ? "#f87171" : "#6b7280"};
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({$inVaild}) => $inVaild ? "#fed2d2" : "#d1d5db"} ;
  color:${({$inVaild})=> $inVaild ? "#ef4444" : "#374151"} ;
  border-color: ${({$inVaild})=> $inVaild ? "#f73f3f" : ""} ;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`

export default function CustomInput({ label, inVaild, ...props}){
    return(
        <p>
            <Label $inVaild={inVaild}>{label}</Label>
            <Input $inVaild={inVaild} {...props} />
        </p>
    )
}