import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
import './styles/global.css';
import { Envelope, Lock } from 'phosphor-react';

export function App() {
  return (
    <>
      <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
        <Logo/>

        <Heading size="lg" className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size="lg" className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
        </header>

        <form className='flex flex-col items-stretch mt-10 w-full max-w-sm'>
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <Input.Root>
              <Input.Icon>
                <Envelope/>
              </Input.Icon>
              
              <Input.Input placeholder='Digite seu e-mail'/>
            </Input.Root >
          </label>

          <label htmlFor="password" className='flex flex-col mt-5 gap-3'>
            <Text className='font-semibold'>Sua senha</Text>
            <Input.Root>
              <Input.Icon>
                <Lock/>
              </Input.Icon>
              
              <Input.Input type='password' id='password' placeholder='********'/>
            </Input.Root >
          </label>

          <label htmlFor="remember" className='flex items-center mt-4 gap-2'>
            <Checkbox id="remember" />
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>

          </label>

          <Button type='submit' className='mt-4'>
            Entrar na plataforma
          </Button>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href=""className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>

          <Text  asChild size='sm'>
          <a href=""className='text-gray-400 underline hover:text-gray-200'>Não possui uma conta?</a>
          </Text>
         

        </footer>
      </div>
    </>
  )
}
