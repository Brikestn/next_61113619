import Footer from "../components/footer/footer";
import Shops from "../components/Shops";
import SetHead from "../components/head";
import Head from "next/head";

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "เตรียมสอบ PAT 1 ความถนัดทางคณิตศาสตร์ (ปรับปรุง)",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/201908/484598/1000222847_front_XL.jpg?t=cat&imgname=%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%AA%E0%B8%AD%E0%B8%9A-PAT-1-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%96%E0%B8%99%E0%B8%B1%E0%B8%94%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%93%E0%B8%B4%E0%B8%95%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-(%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B8%E0%B8%87)",
    author: "วชิรา โอภาสวัฒนา",
    product_price: 169,
  },
  {
    product_id: 2,
    product_name: "ฝึกสนทนาภาษาญี่ปุ่น 101 ชั่วโมง",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/201904/476989/1000218189_front_XL.jpg?t=cat&imgname=%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%AA%E0%B8%99%E0%B8%97%E0%B8%99%E0%B8%B2%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B2%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99-101-%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%82%E0%B8%A1%E0%B8%87",
    author: "เจนจิรา วรรษชล",
    product_price: 200,
  },
  {
    product_id: 3,
    product_name: "คู่มือเตรียมสอบ ก.พ. ตามหลักเกณฑ์ใหม่ (ภาค ก.) ฉบับสมบูรณ์",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202002/500793/1000231293_front_XL.jpg?t=cat&imgname=%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%AA%E0%B8%AD%E0%B8%9A-%E0%B8%81.%E0%B8%9E.-%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88-(%E0%B8%A0%E0%B8%B2%E0%B8%84-%E0%B8%81.)-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%9A%E0%B8%B9%E0%B8%A3%E0%B8%93%E0%B9%8C",
    author: "อุดม สุขทอง",
    product_price: 160,
  },
  {
    product_id: 4,

    product_name: "TOEIC Complete Guide Book",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/201903/475591/1000217412_front_XL.jpg?t=cat&imgname=TOEIC-Complete-Guide-Book",
    author: " เพ็ญใจ สินเสมอสุข",
    product_price: 780,
  },
  {
    product_id: 5,

    product_name: "ตีป้อมไทย 9 วิชาสามัญ ม.ปลาย",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/201811/246647/1000213810_front_XL.jpg?t=cat&imgname=%E0%B8%95%E0%B8%B5%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%84%E0%B8%97%E0%B8%A2-9-%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D-%E0%B8%A1.%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2",
    author: "อรุณรัชช์ แสงพงษ์ (ครูอ๊อฟ)",
    product_price: 150,
  },
  {
    product_id: 6,

    product_name:
      "ESSENTIAL ENGLISH-AMERICAN IDIOMS AND SLANG FOR THAI STUDENTS",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202008/509937/1000234472_front_XL.jpg?t=cat&imgname=ESSENTIAL-ENGLISH-AMERICAN-IDIOMS-AND-SLANG-FOR-THAI-STUDENTS",
    author: "สำราญ คำยิ่ง",
    product_price: 262,
  },
  {
    product_id: 7,

    product_name: "Great Physics สรุปหลักฟิสิกส์ ม.ปลาย",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202010/514932/1000237516_front_XL.jpg?t=cat&imgname=Great-Physics-%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%9F%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B9%8C-%E0%B8%A1.%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2",
    author: "อภิชญา วงศ์เทพวาณิชย์ และ คณาจารย์Think",
    product_price: 260,
  },
  {
    product_id: 8,

    product_name: "Great Chemistry สรุปหลักเคมี ม.ปลาย",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202007/508924/1000234086_front_XL.jpg?t=cat&imgname=Great-Chemistry-%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%84%E0%B8%A1%E0%B8%B5-%E0%B8%A1.%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%A2",
    author: "อภิชญา วงศ์เทพวาณิชย์ และ คณาจารย์Think",
    product_price: 118,
  },
  {
    product_id: 9,

    product_name: "โจทย์ 500 N1",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/202006/507219/1000233447_front_XL.jpg?t=cat&imgname=%E0%B9%82%E0%B8%88%E0%B8%97%E0%B8%A2%E0%B9%8C-500-N1",
    author: "โนริโกะ มัทสึโมโตะ และ ฮิโตโกะ ซาซากิ",
    product_price: 221,
  },
  {
    product_id: 10,
    product_name: "ตะลุยโจทย์ข้อสอบ O-NET ระดับมัธยมศึกษาปีที่ 3",
    product_img:
      "https://storage.naiin.com/system/application/bookstore/resource/product/201711/225660/1000202454_front_XL.jpg?t=cat&imgname=%E0%B8%95%E0%B8%B0%E0%B8%A5%E0%B8%B8%E0%B8%A2%E0%B9%82%E0%B8%88%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%9A-O-NET-%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B1%E0%B8%9A%E0%B8%A1%E0%B8%B1%E0%B8%98%E0%B8%A2%E0%B8%A1%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%9B%E0%B8%B5%E0%B8%97%E0%B8%B5%E0%B9%88-3",
    author: "นิสิตแพทย์สามย่าน",
    product_price: 140,
  },
];

export default function Home(props) {
  const { data } = props;
  return (
    <>
      <SetHead />
      <Shops data={data} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: PRODUCT_LISTS,
    },
  };
}
