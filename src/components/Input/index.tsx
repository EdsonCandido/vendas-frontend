import {Input as InputAnt} from 'antd'

interface IInputProps{
    width?: string
    height?: string
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    loading?: boolean;
    err?: boolean;
    errMessage?: string
}
const Input =  ({height = '27px', width= '120px', value, onChange, loading, err= false, errMessage= 'msg error'}: IInputProps) => {
    return (
        <div style={{padding: '5px', display: 'flex', flexDirection: 'column',  width: width, height: height}}>
        <InputAnt value={value} onChange={onChange} disabled={loading} status={!err? '' : 'error'} />
        {err && <span style={{color: 'red'}}>{errMessage}</span>}
        </div>
    );
}

export default Input