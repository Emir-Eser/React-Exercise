
import './App.css'

function App() {


	const softwares =['C','HTML','CSS','JavaScript'];

	const theories = ['Kümeler Kuramı','Grup Teorisi','Kategori Teorisi','Tipler Kuramı']

	return (
		<>
			<header>


				<div className='Empty'></div>

				<div className='title'>

					<div className='my-name'>Emir Eser</div>

					<div className='welcome'>Bloguma Hoş geldiniz.</div>
					
				
				</div>

				<div className='Empty'></div>


			</header>



			<main>

				<div className='Empty'></div>


				<div>

					<div className="about-me">
						Bilgisayar mühendisliği öğrencisiyim. Bu blogda kişisel ilgi alanlarımla ilgili paylaşımlar yapıyorum. Bunlar yazılım ve matematik olarak ikiye ayrılabilir:
					</div>


					<div className='interests-container'>

						<div className="software-container">

							<div className='software-title'>
								YAZILIM
							</div>

							<div className='software'>

								<ul>
									{softwares.map((software,index)=><li key={index}>{software}</li>)}
								</ul>

							</div>

						</div>

						<div className='Empty'></div>

						<div className="math-container">

							<div className='math-title'>
								MATEMATİK
							</div>
							
							<div className='math'>

								<ul>
									{theories.map((theory,index)=><li key={index}>{theory}</li>)}
								</ul>

							</div>

						</div>

					</div>

				</div>

				<div className='Empty'></div>


			</main>

			<footer>

				<div className='Empty'></div>

				<div className="contact-info-container">
					<div className="contact-info">
		
					<div >
						<a href="https://www.linkedin.com/in/emir-eser-4259bb294/" target="_blank" >LinkedIn</a> 
					</div>

					<div>
						<a href="https://twitter.com/EserEmirr" target="_blank">X</a> 
					</div>

					<div>
						<a href="https://www.instagram.com/emireser.ed/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank" >Instagram</a>
					</div>
					
					</div>
				</div>

				<div className='Empty'></div>

			</footer>	
		</>
	)
}	

export default App
