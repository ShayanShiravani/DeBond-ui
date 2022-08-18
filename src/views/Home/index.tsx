import Head from "next/head";
import BondInfo from "./components/BondInfo";
import Bonding from "./components/Bonding";
import OrderList from "./components/OrdersList";
import OtcInfo from "./components/OtcInfo";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>DeBond</title>
      </Head>
      <div className={'relative bg-blur bg-cover'}>
        <picture>
          <img className={'absolute -top-8'} src={'/images/common/blob-bg.svg'} alt="test" />
        </picture>
        <div className={'py-10 lg:py-20 px-4 sm:px-20 relative z-10'}>
          <section className={'flex flex-col xl:flex-row items-center xl:items-start justify-evenly mb-24 lg:mb-36'}>
            <section className="lg:w-3/5 w-full px-2 mb-2">
              <div className={'card bg-card w-full px-4 mb-2'}>
                <OtcInfo />
              </div>
              <div className={'card bg-card w-full px-4 mb-2'}>
                <BondInfo />
              </div>
            </section>
            <section className={'lg:w-2/5 w-full px-2 order-first lg:order-last mb-2'}>
                <div className={'card bg-card w-full px-4 mb-2'}>
                  <Bonding />
                </div>
                <div className={'card bg-card w-full px-4 mb-2'}>
                  <OrderList />
                </div>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home