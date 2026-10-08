import './inicio.scss';

function Inicio() {
  return (
    <div className="principal">
      
      <section className='cima'>
      <img src='./assets/images/logo.png' alt=''></img>
      <a className='inicio' href=''>Início</a>
      <a href=''>Como funciona</a>
      <a href=''>Doações</a>
      <a href=''>Instituições</a>
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

      
    </div>
  );
}

export default Inicio;
