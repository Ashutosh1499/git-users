import React, { useState } from 'react';

function UserRepo({ repo }) {
	const [isrepoOpen, setRepoOpen] = useState(false);
	return (
		<>
			<p
				className='detail repoAccordion fb items-center justify-between'
				onClick={() => {
					setRepoOpen(!isrepoOpen);
				}}>
				Repositories
				<img
					src='https://www.reshot.com/preview-assets/icons/ZP2WDL9B8N/arrow-right-ZP2WDL9B8N.svg'
					alt=''
					style={{
						transform: `rotate(${isrepoOpen ? '90deg' : '180deg'})`,
					}}
				/>
			</p>
			{isrepoOpen ? (
				<p className='detail'>
					{repo
						? repo.map(rep => (
								<>
									<a
										href={rep.html_url}
										className='repoLink fb items-center justify-between'
										target='_blank'
										rel='noreferrer'>
										<p className='repos'>{rep.name}</p>
										<img
											src='https://www.svgrepo.com/show/527177/link.svg'
											alt=''
										/>
									</a>
								</>
						  ))
						: ''}
				</p>
			) : (
				''
			)}
		</>
	);
}

export default UserRepo;
