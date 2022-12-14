import SingleImg from '../img/single.jpg';
import Dog from '../img/dog.jpg';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
	return (
		<div className='single'>
			<div className='content'>
				<img src={SingleImg} alt='single' />
				<div className='user'>
					<img src={Dog} alt='' />
					<div className='info'>
						<span>John</span>
						<p>Posted 2 days ago</p>
					</div>
					<div className='edit'>
						<Link className='link' to={`/write?edit=2`}>
							<img src={Edit} alt='' />
						</Link>
						<img src={Delete} alt='' />
					</div>
				</div>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a
					soluta molestiae doloribus inventore mollitia nihil asperiores natus
					dicta veritatis! Aut tempore dicta nesciunt odit iste. Doloremque ea
					aspernatur ipsum.Architecto, libero veniam cupiditate ullam qui
					blanditiis ipsum repellat possimus! Deserunt voluptatum placeat earum
					magnam saepe aliquam accusamus accusantium, doloremque quae
					quidem.Architecto, libero veniam cupiditate ullam qui blanditiis ipsum
					repellat possimus! Deserunt voluptatum placeat earum magnam saepe
					aliquam accusamus accusantium, doloremque quae quidem.
				</p>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a
					soluta molestiae doloribus inventore mollitia nihil asperiores natus
					dicta veritatis! Aut tempore dicta nesciunt odit iste. Doloremque ea
					aspernatur ipsum.Architecto, libero veniam cupiditate ullam qui
					blanditiis ipsum repellat possimus! Deserunt voluptatum placeat earum
					magnam saepe aliquam accusamus accusantium, doloremque quae
					quidem.Architecto, libero veniam cupiditate ullam qui blanditiis ipsum
					repellat possimus! Deserunt voluptatum placeat earum magnam saepe
					aliquam accusamus accusantium, doloremque quae quidem.
				</p>
				<br />{' '}
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt a
					soluta molestiae doloribus inventore mollitia nihil asperiores natus
					dicta veritatis! Aut tempore dicta nesciunt odit iste. Doloremque ea
					aspernatur ipsum.Architecto, libero veniam cupiditate ullam qui
					blanditiis ipsum repellat possimus! Deserunt voluptatum placeat earum
					magnam saepe aliquam accusamus accusantium, doloremque quae
					quidem.Architecto, libero veniam cupiditate ullam qui blanditiis ipsum
					repellat possimus! Deserunt voluptatum placeat earum magnam saepe
					aliquam accusamus accusantium, doloremque quae quidem.
				</p>
			</div>
			<Menu />
		</div>
	);
};
export default Single;
