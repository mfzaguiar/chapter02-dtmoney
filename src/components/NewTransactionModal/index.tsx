import { useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransacitionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose } : NewTransacitionModalProps){
    const [type, setType] = useState('deposit')
    
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

          <Container>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
            />

            <input 
                type="number"
                placeholder="Valor"
            />

            <TransactionTypeContainer>
                <RadioBox
                 type="button"
                 isActive={type === 'withdraw'}
                 onClick={() => setType('withdraw')}
                >
                 <img src={incomeImg} alt="Entrada"/>
                 <span>Entrada</span>
                </RadioBox>
                <RadioBox
                 type="button"
                 isActive={type === 'deposit'}
                 onClick={() => setType('deposit')}
                >
                 <img src={outcomeImg} alt="Saída"/>
                 <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>
            
            <input 
                placeholder="Categoria"
            />

            <button type="submit">Cadastrar</button>
         </Container>
      </Modal>  
    )
}