export default function Input({ inputClassName, titleClassName}, props){
    return  <><h1 className={titleClassName}>{props.label}</h1>
                <input onChange={props.onChange} className={inputClassName}
                    type={props.type} placeholder={props.placeholder} required></input>
            </>
}