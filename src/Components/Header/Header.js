import { ArrowLeftOutlined, DesktopOutlined, TabletOutlined, MobileOutlined, CheckCircleFilled } from '@ant-design/icons';
import './Header.css';

const Header = ({scrolled}) => {
    return (
        <div className={`header ${scrolled ? 'headScrolled' : ''}`}>
            <div className="leftSide">
                <a className='forward' href='www.google.com' alt="forward"><ArrowLeftOutlined /></a>
                <p>Tous Les templates</p>
                <div className='platforms'>
                    <a className='desktop' href='www.google.com' alt="desktop"><DesktopOutlined /></a>
                    <a className='tablet' href='www.google.com' alt="tablet"><TabletOutlined /></a>
                    <a className='mobile' href='www.google.com' alt="mobile"><MobileOutlined /></a>
                </div>
            </div>
            <div className="rightSide">
                <p className='checkP'>  <CheckCircleFilled /> <p className='checkPInner'>Essayer Zyro sans carte bancaire</p></p>
                <p className='pureP'> Commencer à construire</p>
            </div>

        </div>
    )
}

export default Header;