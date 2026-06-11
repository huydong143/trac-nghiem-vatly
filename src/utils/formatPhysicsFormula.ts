import React from 'react'; // Đảm bảo đã có dòng import này ở đầu file nếu chưa có
export const formatPhysicsFormula = (text: string | undefined) => {
  if (!text) return '';
  
  // Khớp với các kí hiệu hạt nhân dạng _6^14 C, _92^235 U
  const nuclearRegex = /_(\d+)\^(\d+)([A-Za-z]+)/g;
  // Khớp với số mũ dạng 10^-15, 10^5
  const powerRegex = /\^([-+]?\d+)/g;
  // Khớp với chỉ số dưới dạng N_A, C_0, v_rms, m_p, m_n, E_lk, ΔE
  const subscriptRegex = /_([A-Za-z\d]+|\{[A-Za-z\d]+\})/g;

  let formatted = text;
  
  // Khử các ký hiệu toán học thủ công bằng HTML tag trực quan
  formatted = formatted.replace(nuclearRegex, (_, p1, p2, p3) => {
    return `<span class="inline-flex flex-col-reverse justify-center align-middle leading-none text-xxs mx-0.5"><sub class="text-left font-sans select-all">${p1}</sub><sup class="text-left font-sans select-all">${p2}</sup></span><span class="italic font-bold">${p3}</span>`;
  });

  formatted = formatted.replace(powerRegex, (_, p1) => {
    return `<sup>${p1}</sup>`;
  });

  formatted = formatted.replace(subscriptRegex, (_, p1) => {
    const cleanSub = p1.replace(/[{}]/g, '');
    return `<sub>${cleanSub}</sub>`;
  });

return React.createElement('span', { dangerouslySetInnerHTML: { __html: formatted } });};
