import oven from "@/assets/franchise/equipments/oven.png";
import firePot from "@/assets/franchise/equipments/fire_pot.png";
import fridge from "@/assets/franchise/equipments/fridge.png";
import freezer from "@/assets/franchise/equipments/freezer.png";
import fryer from "@/assets/franchise/equipments/fryer.png";
import grill from "@/assets/franchise/equipments/grill.png";
import stove from "@/assets/franchise/equipments/stove.png";

export const franchiseMainContentList = {
  label: "For Franchises",
  headline: "가장 진보한 미래형 푸드 솔루션",
  desc: "모바일 앱과 디지털 생산 솔루션으로 구축된 가장 진보적인 프랜차이즈 모델",
  button: "Do you want makeat?",
  contents: [
    {
      headline: "최초 맞춤형 푸드 솔루션​",
      text: "맞춤형 푸드를 제공할 수 있는 최초의 솔루션! 거대하게 성장할 시장을 초기에 선점하세요.",
    },
    {
      headline: "첨단 디지털 생산 솔루션",
      text: "주문부터 조리까지 모든 과정이 디지털 환경으로 통제되어 정확한 매장 운영이 가능해요.",
    },
    {
      headline: "수요에 기반한 운영​",
      text: "모바일 앱을 통한 접근 및 주문 수행으로 확보된 수요 기반의 안정적 영업이 가능해요.​",
    },
    {
      headline: "카트리지 시스템",
      text: "블록단위 식자재 공급 및 디지털 조리 통제 시스템을 통해 누구나 간편하고 정확한 생산이 가능해요.",
    },
  ],
};

export const franchiseCheckContentList = {
  label: "Check it out",
  headline: "How do you cooksup?",
  desc: "당신의 주방에 있는 장비를 선택해주세요.",
  equipments: [
    { id: 1, icon: oven, name: "오븐" },
    { id: 2, icon: firePot, name: "화덕" },
    { id: 3, icon: fridge, name: "냉장고" },
    { id: 4, icon: freezer, name: "냉동고" },
    { id: 5, icon: fryer, name: "튀김기" },
    { id: 6, icon: grill, name: "그릴" },
    { id: 7, icon: stove, name: "화구" },
  ],
};

export const franchisePageContentList = {
  label: "For Owner",
  headline: "cooksup이 해결해드려요",
  desc: "",
  contents: [
    {
      headline: "영업은 어떻게 하나요?",
      text: "모든 영업 활동은 본사에서! 주문도 App을 통해 본사에서! 사장님은 조리에만 집중하세요!",
    },
    {
      headline: "인테리어 비용이 고민인가요?",
      text: "최소한의 요건만 요구돼요. 기존 주방의 설비를 최대한 활용하고 최소의 비용으로 시작하실 수 있게 도와드려요.",
    },
    {
      headline: "인건비 부담을 덜어드려요!",
      text: "모든 메뉴는 블록 단위로 구성되어 있어 주문 즉시 조립되는 형태로, 조리의 난이도가 매우 낮기 때문에 최소한의 비숙련 인력으로 가능해요.",
    },
    {
      headline: "유행이 지나면 어쩌지?",
      text: "COOKSUP은 특정 장르의 음식에 제한되지 않아요! 고객의 건강상태에 맞는 모든 장르의 음식을 AI가 생성해줘요.",
    },
  ],
};
