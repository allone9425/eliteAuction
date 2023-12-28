import { AuctionStatus, ProductStatus } from "../types/detailTyps";

export function formatNumberWithCommas(number: number = 0) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatProductStatus(status: ProductStatus) {
  switch (status) {
    case ProductStatus.S:
      return "최상";
    case ProductStatus.A:
      return "상";
    case ProductStatus.B:
      return "중";
    default:
      return "하";
  }
}

export function formatAuctionStatusByButton(status: AuctionStatus) {
  switch (status) {
    case AuctionStatus.READY:
      return "경매 준비";
    case AuctionStatus.END:
      return "경매 종료";
    default:
      return "입찰하기";
  }
}