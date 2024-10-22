import starIcon from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(starIcon);

  return stars.map((star, idx) => (
    <img key={idx} src={star} width="14" height="14" alt="star" />
  ));
}
