import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface NewTransacitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransacitionModalProps){
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [categorie, setCategorie] = useState('');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            type,
            categorie
        }
      
        api.post('/transactions', data)
    }
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
          <button 
            className="react-modal-close" 
            type="button" 
            onClick={onRequestClose}
          >
              <img src={closeImg} alt="close"/>
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                 type="button"
                 isActive={type === 'deposit'}
                 activeColor="green"
                 onClick={() => setType('deposit')}
                >
                 <img src={outcomeImg} alt="Saída"/>
                 <span>Saída</span>
                </RadioBox>

                <RadioBox
                 type="button"
                 isActive={type === 'withdraw'}
                 activeColor="red"
                 onClick={() => setType('withdraw')}
                >
                 <img src={incomeImg} alt="Entrada"/>
                 <span>Entrada</span>
                </RadioBox>
            </TransactionTypeContainer>
            
            <input 
                placeholder="Categoria"
                value={categorie}
                onChange={event => setCategorie(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
         </Container>
      </Modal>  
    )
}