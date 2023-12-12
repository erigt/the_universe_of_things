import { ref, watchEffect } from 'vue';

export function useChangeHeart() {
  const corazonTransparente = ref(true);

  const cambiarColor = () => {
    corazonTransparente.value = !corazonTransparente.value;
  };

  const corazonSrc = ref("/src/components/icons/Image20231205125028.png");

  watchEffect(() => {
    corazonSrc.value = corazonTransparente.value
      ? "/src/components/icons/Image20231205125028.png"
      : "/src/components/icons/corazon.png";
  });

  return {
    corazonTransparente,
    cambiarColor,
    corazonSrc,
  };
}
