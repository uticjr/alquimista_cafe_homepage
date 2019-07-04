import React from 'react';
import Icon from '@mdi/react';
import { mdiGooglePlus, mdiLinkedin, mdiTwitter } from '@mdi/js';

const Footer = () => (
	<div className="footer">
		<div className="container">
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
				<div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
					<h3>Siga a gente</h3>
					<div style={{ display: 'flex', marginTop: 8 }}>
						<Icon path={mdiGooglePlus} size={1} style={{ marginRight: 11 }} />
						<Icon path={mdiLinkedin} size={1} style={{ marginRight: 11 }} />
						<Icon path={mdiTwitter} size={1} style={{ marginRight: 11 }} />
					</div>
					<h3 style={{ marginTop: 11 }}>Entre em contato</h3>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingTop: 22 }}>
					<h3>Localização</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.286940184937!2d-48.47130472404206!3d-1.431064918364016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48c07b8d02ec9%3A0xe05f920cbefc4ada!2sCafeteria+Dom+Valentim!5e0!3m2!1spt-BR!2sbr!4v1562270136471!5m2!1spt-BR!2sbr"
						width="600"
						height="450"
						frameborder="0"
						style={{ border: 0 }}
						allowfullscreen
					/>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
