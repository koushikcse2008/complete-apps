import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import Sidebar from '@/components/common/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common-layout.css';

const CommonLayout = ({ children }) => {
  return (
    <>
    <Header />
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-lg-2'>
              <Sidebar />
          </div>
          <div class='col-lg-10'>
            <div class='mt-3 border border-2 border-black p-3'>
              {children}
            </div>            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
