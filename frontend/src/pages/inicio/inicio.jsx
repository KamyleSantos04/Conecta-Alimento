
import './inicio.scss';

export default function Inicio() {
  return (
    <div className="principal">
      
      <section className='cima'>
      <img src='./assets/images/logo.png' alt=''></img>
      <p>Início</p>
      <p>Como funciona</p>
      <p>Doações</p>
      <p>Instituições</p>
      <button className='um'>Entrar</button>
      <button className='dois'>Criar conta</button>
      </section>  

    <div className="maior">
      <section className='texto'>
     <h1 className='menos'>Menos desperdício. <br/> <span>Mais alimento</span>  <br /> chegando a quem precisa.</h1>

      <p className='conectamos'>Conectamos estabelecimentos que possuem <br />excedentes alimentares  a instituições <br />que precisam deles.</p>
        </section>
      <div className="foto"><img src='./assets/images/bonequinhos.png' alt='' width={400}></img></div>
    
    </div>

      <section className='botoes'>
        <button className='doar'>Quero doar</button>
        <button className='doardois'>Preciso de alimentos</button>
      </section>

      <div className='bege'>
        <div className="icons">
          <img src='./assets/images/maca.png' alt='' width={150}></img>
          <img src='./assets/images/pessoas.png' alt='' width={150}></img>
          <img src='./assets/images/folha.png' alt='' width={150}></img>
        </div>
        <div className='testu'>
          <p>Conecta estabelecimento e instituições</p>
          <p>Combate a fome e o desperdício</p>
          <p className='sim'>Fortalece as comunidades</p>

         
        </div>
      </div>
    </div>
  );
}


