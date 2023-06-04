import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputRootProps {
    children: ReactNode;
}

function InputRoot(props: InputRootProps) {
    return(
        <div className='flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {props.children}
        </div>
    )
}

export interface InputIconProps {
    children: ReactNode;
}

function InputIcon(props: InputIconProps) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {props.children}
        </Slot>
    )
    
}

// InputIcon.displayName = 'InputIcon'

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props: InputInputProps) {
    return(
            <input 
                className= 'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
                {...props}
            />       
    )
}

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    Icon: InputIcon,

}