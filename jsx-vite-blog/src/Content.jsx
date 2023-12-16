
import './App.css'

function Content() {


	const softwares =['C','HTML','CSS','JavaScript'];

	const theories = ['Kümeler Kuramı','Grup Teorisi','Kategori Teorisi','Tipler Kuramı']

	return (
		<>

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
	
		</>
	)
}	

export default Content
