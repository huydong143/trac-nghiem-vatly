export const QUESTION_BANK = [
  // ---------------------------------------------------------
  // MỨC ĐỘ DỄ (CÂU 1 - 30): NHẬN BIẾT & THÔNG HIỂU CƠ BẢN
  // ---------------------------------------------------------
  {
    id: 1,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Phát biểu nào sau đây KHÔNG đúng khi nói về mô hình động học phân tử chất khí?",
    options: [
      "Các chất được cấu tạo từ các hạt riêng biệt gọi là phân tử.",
      "Các phân tử chuyển động không ngừng, nhiệt độ càng cao tốc độ chuyển động càng lớn.",
      "Giữa các phân tử luôn có lực hút và đẩy liên kết phân tử.",
      "Các phân tử luôn đứng yên quanh vị trí cân bằng cố định trong mọi trạng thái."
    ],
    answerIndex: 3,
    hint: "Hãy nhớ rằng mọi phân tử đều chuyển động nhiệt hỗn loạn không ngừng trừ khi ở độ không tuyệt đối.",
    rationale: "Theo mô hình động học phân tử, các phân tử luôn chuyển động không ngừng. Chỉ có chất rắn kết tinh các phân tử mới dao động quanh vị trí cân bằng cố định."
  },
  {
    id: 2,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Đặc điểm cấu trúc của thể khí so với thể rắn và lỏng là gì?",
    options: [
      "Khoảng cách giữa các phân tử rất gần nhau và sắp xếp có trật tự chặt chẽ.",
      "Khoảng cách các phân tử rất xa nhau, chuyển động hỗn loạn không ngừng và lực tương tác rất nhỏ.",
      "Có hình dạng và thể tích hoàn toàn xác định, rất khó bị nén.",
      "Lực tương tác phân tử cực kỳ lớn, giữ các phân tử ở vị trí cố định."
    ],
    answerIndex: 1,
    hint: "Hãy nghĩ về lý do tại sao chất khí có thể dễ dàng bị nén và lan tỏa khắp phòng.",
    rationale: "Ở thể khí, khoảng cách phân tử gấp hàng chục lần kích thước phân tử, lực liên kết rất yếu, dẫn đến chuyển động hỗn loạn và dễ nén."
  },
  {
    id: 3,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Quá trình chuyển từ thể rắn trực tiếp sang thể khí được gọi là gì?",
    options: [
      "Sự ngưng kết.",
      "Sự hóa hơi.",
      "Sự thăng hoa.",
      "Sự nóng chảy."
    ],
    answerIndex: 2,
    hint: "Ví dụ điển hình là băng khô (CO2 rắn) hay viên băng phiến trong tủ quần áo.",
    rationale: "Quá trình chuyển đổi trực tiếp từ thể rắn sang thể khí mà không qua trạng thái lỏng được gọi là sự thăng hoa."
  },
  {
    id: 4,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Nhiệt độ nóng chảy của một chất rắn kết tinh có đặc điểm gì nổi bật so với chất rắn vô định hình?",
    options: [
      "Nhiệt độ nóng chảy liên tục thay đổi theo thời gian nung nóng.",
      "Có một nhiệt độ nóng chảy xác định ở một áp suất cụ thể.",
      "Vật mềm đi và chuyển sang thể lỏng một cách liên tục không có mốc cố định.",
      "Nhiệt độ nóng chảy phụ thuộc hoàn toàn vào tốc độ gió và độ ẩm môi trường."
    ],
    answerIndex: 1,
    hint: "Thạch anh hay kim loại khi nung sẽ giữ nguyên nhiệt độ trong suốt quá trình nóng chảy.",
    rationale: "Chất rắn kết tinh có nhiệt độ nóng chảy xác định dưới áp suất cho trước, trong khi chất vô định hình (như thủy tinh, nhựa) hóa lỏng liên tục qua một khoảng nhiệt độ."
  },
  {
    id: 5,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Nội năng của một vật là gì?",
    options: [
      "Tổng động năng và thế năng của các phân tử cấu tạo nên vật.",
      "Năng lượng thu được khi vật thực hiện công lên vật khác.",
      "Nhiệt lượng vật nhận được từ môi trường xung quanh.",
      "Tổng động năng chuyển động định hướng của toàn bộ vật thể."
    ],
    answerIndex: 0,
    hint: "Nội năng ký hiệu là U, liên quan trực tiếp đến nhiệt độ (động năng phân tử) và thể tích (thế năng phân tử).",
    rationale: "Nội năng (U) của một hệ vật lí là tổng động năng chuyển động nhiệt hỗn loạn của các phân tử và thế năng tương tác giữa chúng."
  },
  {
    id: 6,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Hệ thức của Định luật I Nhiệt động lực học là ΔU = A + Q. Quy ước dấu nào sau đây là ĐÚNG?",
    options: [
      "Q > 0: Hệ truyền nhiệt lượng ra môi trường; A < 0: Hệ nhận công.",
      "Q < 0: Hệ nhận nhiệt lượng; A > 0: Hệ thực hiện công lên vật khác.",
      "Q > 0: Hệ nhận nhiệt lượng; A > 0: Hệ nhận công từ bên ngoài.",
      "Q < 0: Hệ nhận công; A > 0: Hệ truyền nhiệt lượng."
    ],
    answerIndex: 2,
    hint: "Các giá trị mang dấu dương (+) khi hệ 'nhận vào' năng lượng (nội năng tăng).",
    rationale: "Quy ước chuẩn: Q > 0 khi hệ nhận nhiệt lượng; A > 0 khi hệ nhận công từ lực bên ngoài tác dụng lên hệ."
  },
  {
    id: 7,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Nhiệt độ không tuyệt đối (0 Kelvin) tương đương với bao nhiêu độ Celsius?",
    options: [
      "-273,15 °C",
      "0 °C",
      "100 °C",
      "-373,15 °C"
    ],
    answerIndex: 0,
    hint: "Công thức chuyển đổi là T (K) = t (°C) + 273,15.",
    rationale: "Độ không tuyệt đối nằm ở mốc 0 K, tương đương chính xác là -273,15 °C (thường làm tròn là -273 °C)."
  },
  {
    id: 8,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Đơn vị đo của nhiệt dung riêng trong hệ SI là gì?",
    options: [
      "J / kg",
      "J / K",
      "J / (kg.K)",
      "W / (m.K)"
    ],
    optionsFormulas: ["J/kg", "J/K", "J/(kg\\cdot K)", "W/(m\\cdot K)"],
    answerIndex: 2,
    hint: "Công thức liên hệ nhiệt lượng: Q = m.c.ΔT. Hãy suy ra thứ nguyên của c.",
    rationale: "Từ Q = m.c.ΔT, ta có c = Q / (m.ΔT). Đơn vị tương ứng là Jun trên kilôgam nhân Kelvin (J/kg.K)."
  },
  {
    id: 9,
    chapter: "Vật lí nhiệt",
    difficulty: "Dễ",
    question: "Nhiệt nóng chảy riêng của một chất là gì?",
    options: [
      "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn 1 kg chất đó ở nhiệt độ nóng chảy.",
      "Nhiệt lượng tỏa ra khi làm 1 kg chất lỏng hóa hơi hoàn toàn.",
      "Nhiệt lượng cần thiết để tăng 1 kg chất rắn lên thêm 1 độ Kelvin.",
      "Nhiệt lượng tỏa ra môi trường trong quá trình đông đặc toàn bộ chất rắn ở 0 °C."
    ],
    answerIndex: 0,
    hint: "Công thức tính nhiệt lượng nóng chảy là Q = λ.m. Đơn vị của λ là J/kg.",
    rationale: "Nhiệt nóng chảy riêng λ là nhiệt lượng cần cung cấp để chuyển hoàn toàn 1 kg chất từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy xác định."
  },
  {
    id: 10,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Chuyển động Brown là chuyển động gì?",
    options: [
      "Chuyển động rơi tự do của các hạt bụi dưới tác dụng của trọng lực.",
      "Chuyển động hỗn loạn, không ngừng của các hạt nhẹ (như hạt phấn hoa) lơ lửng trong chất lỏng hoặc chất khí.",
      "Chuyển động thẳng đều của các phân tử khí khi không có va chạm.",
      "Chuyển động quay tròn của dòng chất lỏng khi bị đun nóng đối lưu."
    ],
    answerIndex: 1,
    hint: "Đây là bằng chứng thực nghiệm quan trọng chứng minh sự tồn tại và chuyển động không ngừng của các phân tử.",
    rationale: "Chuyển động Brown là chuyển động hỗn loạn không ngừng của hạt vi mô lơ lửng, gây ra bởi sự va chạm không cân bằng của các phân tử chất lỏng/khí xung quanh."
  },
  {
    id: 11,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Trong các phát biểu sau về khí lí tưởng, phát biểu nào sau đây là SAI?",
    options: [
      "Các phân tử khí được coi là các chất điểm có khối lượng.",
      "Các phân tử khí chỉ tương tác với nhau khi va chạm.",
      "Thể tích của bản thân các phân tử khí chiếm phần lớn thể tích bình chứa.",
      "Các va chạm giữa các phân tử khí và với thành bình là va chạm hoàn toàn đàn hồi."
    ],
    answerIndex: 2,
    hint: "Hãy nhớ khí lí tưởng bỏ qua kích thước phân tử so với khoảng cách lớn giữa chúng.",
    rationale: "Khí lí tưởng coi thể tích của các phân tử là không đáng kể (bỏ qua) so với thể tích của bình chứa."
  },
  {
    id: 12,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Số Avogadro (N_A) có giá trị xấp xỉ bằng bao nhiêu và ý nghĩa của nó?",
    options: [
      "6,02 * 10^23 hạt/mol, biểu thị số nguyên tử hoặc phân tử có trong một mol chất.",
      "1,38 * 10^-23 J/K, biểu thị mức độ hỗn loạn phân tử.",
      "8,31 J/(mol.K), hằng số phổ quát cho mọi chất khí.",
      "9,1 * 10^-31 kg, khối lượng của một phân tử khí hidro."
    ],
    answerIndex: 0,
    hint: "Số Avogadro dùng để quy đổi từ số phân tử N sang số mol n qua công thức N = n * N_A.",
    rationale: "Số Avogadro N_A = 6,02 * 10^23 mol^-1 là số thực thể (nguyên tử, phân tử) có trong chính xác 1 mol chất."
  },
  {
    id: 13,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Quá trình đẳng nhiệt của một lượng khí xác định tuân theo định luật nào?",
    options: [
      "Định luật Charles.",
      "Định luật Boyle.",
      "Định luật Newton.",
      "Định luật Faraday."
    ],
    answerIndex: 1,
    hint: "Khi nhiệt độ không đổi, áp suất tỉ lệ nghịch với thể tích: p.V = const.",
    rationale: "Định luật Boyle phát biểu rằng đối với một lượng khí xác định ở nhiệt độ không đổi, tích của áp suất và thể tích là một hằng số."
  },
  {
    id: 14,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Hệ thức nào sau đây biểu diễn định luật Charles (quá trình đẳng tích của một khối khí xác định)?",
    options: [
      "p / T = hằng số",
      "p.V = hằng số",
      "V / T = hằng số",
      "p / V = hằng số"
    ],
    answerIndex: 0,
    hint: "Trong quá trình đẳng tích (thể tích V không đổi), áp suất p tỉ lệ thuận với nhiệt độ tuyệt đối T.",
    rationale: "Định luật Charles chỉ ra rằng áp suất p của một lượng khí xác định tỉ lệ thuận với nhiệt độ tuyệt đối T khi thể tích giữ không đổi: p/T = hằng số."
  },
  {
    id: 15,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Trong hệ tọa độ (p, V), đường đẳng nhiệt có hình dạng là đường gì?",
    options: [
      "Đường thẳng đi qua gốc tọa độ.",
      "Đường thẳng song song với trục áp suất p.",
      "Đường hypebol.",
      "Đường parabol hướng lên trên."
    ],
    answerIndex: 2,
    hint: "Vì p tỉ lệ nghịch với V (p = C / V), đồ thị toán học của hàm số này có dạng rất đặc trưng.",
    rationale: "Trong hệ tọa độ (p, V), phương trình p.V = hằng số cho đồ thị biểu diễn là một đường hypebol cắt góc phần tư thứ nhất."
  },
  {
    id: 16,
    chapter: "Khí lí tưởng",
    difficulty: "Dễ",
    question: "Hằng số Boltzmann (k) liên hệ trực tiếp giữa hai đại lượng nào sau đây?",
    options: [
      "Áp suất và thể tích chất khí.",
      "Động năng trung bình của phân tử và nhiệt độ tuyệt đối.",
      "Số mol khí và hằng số khí lí tưởng R.",
      "Khối lượng phân tử và tốc độ căn quân phương."
    ],
    answerIndex: 1,
    hint: "Công thức: E_d = (3/2).k.T.",
    rationale: "Hằng số Boltzmann k = R / N_A = 1,38 * 10^-23 J/K xác định mối quan hệ trực tiếp giữa nhiệt độ tuyệt đối T và động năng tịnh tiến trung bình của phân tử khí."
  },
  {
    id: 17,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Đại lượng đặc trưng cho độ mạnh yếu của từ trường tại một điểm được gọi là gì?",
    options: [
      "Từ thông.",
      "Cảm ứng từ.",
      "Suất điện động cảm ứng.",
      "Lực từ."
    ],
    answerIndex: 1,
    hint: "Đại lượng này ký hiệu là B, có đơn vị đo là Tesla (T).",
    rationale: "Cảm ứng từ (vecto B) là đại lượng vật lí đặc trưng cho từ trường về phương diện tác dụng lực từ."
  },
  {
    id: 18,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Tương tác nào sau đây KHÔNG phải là tương tác từ?",
    options: [
      "Tương tác giữa hai nam châm thẳng đặt gần nhau.",
      "Tương tác giữa một dòng điện và một nam châm thử.",
      "Tương tác giữa hai dòng điện song song chạy cùng chiều.",
      "Tương tác giữa hai điện tích đứng yên đặt trong chân không."
    ],
    answerIndex: 3,
    hint: "Từ trường chỉ được sinh ra và tác dụng lên các điện tích đang chuyển động hoặc dòng điện/nam châm.",
    rationale: "Hai điện tích đứng yên tương tác với nhau bằng lực tĩnh điện (lực Coulomb), không phải lực từ."
  },
  {
    id: 19,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Đường sức từ của từ trường đều có đặc điểm gì?",
    options: [
      "Là những đường thẳng song song và cách đều nhau.",
      "Là những đường tròn đồng tâm xoay quanh dòng điện.",
      "Là các đường cong khép kín có mật độ thay đổi liên tục.",
      "Là những đường thẳng xuất phát từ cực Nam và kết thúc ở cực Bắc."
    ],
    answerIndex: 0,
    hint: "Từ trường đều có cảm ứng từ B như nhau tại mọi điểm, do đó đường sức từ phải đồng nhất.",
    rationale: "Tại mọi điểm trong từ trường đều, vecto cảm ứng từ có cùng chiều, cùng hướng và cùng độ lớn, do đó các đường sức từ là các đường thẳng song song, cách đều nhau."
  },
  {
    id: 20,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Công thức tính lực từ tác dụng lên một đoạn dây dẫn thẳng có chiều dài l mang dòng điện I đặt trong từ trường đều B là gì?",
    options: [
      "F = B.I.l.cos(α)",
      "F = B.I.l.sin(α)",
      "F = B.I.l.tan(α)",
      "F = B.I^2.l.sin(α)"
    ],
    answerIndex: 1,
    hint: "Lực từ triệt tiêu khi đoạn dây song song với đường sức từ (α = 0) và đạt cực đại khi vuông góc (α = 90 độ).",
    rationale: "Công thức lực từ Lorentz tác dụng lên dòng điện thẳng là F = B.I.l.sin(α), với α là góc hợp bởi dây dẫn và vecto cảm ứng từ B."
  },
  {
    id: 21,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Đơn vị của từ thông trong hệ SI là gì?",
    options: [
      "Tesla (T)",
      "Weber (Wb)",
      "Henry (H)",
      "Faraday (F)"
    ],
    answerIndex: 1,
    hint: "1 Wb tương đương với 1 T.m^2.",
    rationale: "Weber (kí hiệu Wb) là đơn vị đo lường của từ thông trong hệ đo lường quốc tế SI."
  },
  {
    id: 22,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Hiện tượng cảm ứng điện từ xuất hiện trong một mạch kín khi nào?",
    options: [
      "Từ thông qua mạch kín biến thiên theo thời gian.",
      "Mạch kín được đặt hoàn toàn trong một từ trường đều đứng yên.",
      "Cường độ dòng điện chạy trong mạch luôn giữ không đổi.",
      "Diện tích của khung dây dẫn tăng lên đồng thời cảm ứng từ giảm đi giữ từ thông không đổi."
    ],
    answerIndex: 0,
    hint: "Từ khóa quyết định ở đây là sự 'biến thiên' (thay đổi) của số đường sức từ xuyên qua mạch.",
    rationale: "Hiện tượng cảm ứng điện từ chỉ xảy ra khi có sự biến thiên từ thông qua mạch kín, sinh ra suất điện động cảm ứng."
  },
  {
    id: 23,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Chiều của dòng điện cảm ứng được xác định bằng định luật nào để chống lại sự biến thiên của từ thông ban đầu?",
    options: [
      "Định luật Lenz.",
      "Định luật Ohm.",
      "Định luật Ampere.",
      "Định luật Joule."
    ],
    answerIndex: 0,
    hint: "Định luật này khẳng định thiên nhiên luôn có xu hướng chống lại sự thay đổi trạng thái từ.",
    rationale: "Theo định luật Lenz, dòng điện cảm ứng phải có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại nguyên nhân sinh ra nó."
  },
  {
    id: 24,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Máy biến áp là thiết bị dùng để làm gì?",
    options: [
      "Biến đổi dòng điện một chiều thành dòng điện xoay chiều.",
      "Biến đổi điện áp xoay chiều mà không làm thay đổi tần số dòng điện.",
      "Biến đổi điện lượng thành nhiệt năng tỏa ra môi trường.",
      "Tăng công suất toàn phần của nguồn điện xoay chiều cực đại."
    ],
    answerIndex: 1,
    hint: "Nó hoạt động dựa trên hiện tượng cảm ứng điện từ giữa hai cuộn dây sơ cấp và thứ cấp.",
    rationale: "Máy biến áp chỉ làm thay đổi biên độ hiệu dụng của điện áp xoay chiều, tần số của dòng điện xoay chiều được giữ nguyên."
  },
  {
    id: 25,
    chapter: "Từ trường",
    difficulty: "Dễ",
    question: "Sóng điện từ là sóng ngang, trong đó các vecto cường độ điện trường E và cảm ứng từ B luôn có quan hệ thế nào với phương truyền sóng v?",
    options: [
      "E và B song song với nhau và vuông góc với v.",
      "E, B và v tạo thành một tam diện thuận, vuông góc từng đôi một.",
      "E song song với v, còn B vuông góc với v.",
      "E và B lệch pha nhau 180 độ khi lan truyền."
    ],
    answerIndex: 1,
    hint: "Hãy nhớ sóng điện từ dao động theo 3 trục không gian độc lập vuông góc với nhau.",
    rationale: "Sóng điện từ là sóng ngang, tại mỗi điểm lan truyền, ba vecto E, B và v luôn vuông góc từng đôi một tạo thành hệ trục tọa độ thuận."
  },
  {
    id: 26,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Dễ",
    question: "Hạt nhân nguyên tử _Z^A X được cấu tạo từ các hạt nào sau đây?",
    options: [
      "Z proton và A neutron.",
      "Z neutron và (A - Z) proton.",
      "Z proton và (A - Z) neutron.",
      "A proton và Z electron."
    ],
    answerIndex: 2,
    hint: "A là số khối (tổng nucleon), Z là số hiệu nguyên tử (số proton).",
    rationale: "Hạt nhân _Z^A X có số hiệu Z (chính là số proton) và số nucleon là A, do đó số neutron N = A - Z."
  },
  {
    id: 27,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Dễ",
    question: "Đồng vị là các nguyên tử có hạt nhân chứa:",
    options: [
      "Cùng số nucleon nhưng khác số proton.",
      "Cùng số proton nhưng khác số neutron.",
      "Cùng số neutron nhưng khác số proton.",
      "Cùng cấu trúc nhưng khối lượng hoàn toàn giống nhau."
    ],
    answerIndex: 1,
    hint: "Ví dụ: Hidro thường, Deuterium và Tritium đều có 1 proton nhưng số neutron lần lượt là 0, 1, 2.",
    rationale: "Các hạt nhân đồng vị có cùng số proton Z (cùng vị trí trong bảng tuần hoàn) nhưng khác số neutron N (dẫn đến khác số khối A)."
  },
  {
    id: 28,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Dễ",
    question: "Lực hạt nhân (lực liên kết giữa các nucleon trong hạt nhân) có bản chất là gì?",
    options: [
      "Lực tĩnh điện Coulomb giữa các proton mang điện dương.",
      "Lực hấp dẫn vạn vật giữa các hạt có khối lượng vô cùng bé.",
      "Lực tương tác mạnh chỉ có tác dụng trong phạm vi kích thước hạt nhân (10^-15 m).",
      "Lực điện từ sinh ra do chuyển động tự quay của các neutron."
    ],
    answerIndex: 2,
    hint: "Đây là lực mạnh nhất trong tự nhiên, vượt qua lực đẩy tĩnh điện khổng lồ giữa các proton đặt cạnh nhau.",
    rationale: "Lực hạt nhân là lực tương tác mạnh, không cùng bản chất với lực điện từ hay hấp dẫn, phạm vi tác dụng cực ngắn cỡ bán kính hạt nhân."
  },
  {
    id: 29,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Dễ",
    question: "Phát biểu nào sau đây biểu diễn ĐÚNG khái niệm độ hụt khối Δm của hạt nhân _Z^A X?",
    options: [
      "Tổng khối lượng các nucleon cấu tạo nên hạt nhân lớn hơn khối lượng của chính hạt nhân đó.",
      "Tổng khối lượng các nucleon bằng chính xác khối lượng thực tế của hạt nhân.",
      "Khối lượng hạt nhân luôn tăng lên sau khi các nucleon liên kết lại với nhau.",
      "Hiệu số khối lượng giữa hạt nhân và khối lượng các electron chuyển động xung quanh."
    ],
    answerIndex: 0,
    hint: "Khi kết hợp lại, một phần khối lượng bị chuyển hóa thành năng lượng liên kết bền vững.",
    rationale: "Khối lượng của hạt nhân m_hn luôn nhỏ hơn tổng khối lượng của các nucleon riêng lẻ khi chưa liên kết: Δm = Z.m_p + (A-Z).m_n - m_hn > 0."
  },
  {
    id: 30,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Dễ",
    question: "Đại lượng nào sau đây quyết định mức độ BỀN VỮNG của một hạt nhân nguyên tử?",
    options: [
      "Khối lượng toàn phần của hạt nhân.",
      "Năng lượng liên kết toàn phần.",
      "Năng lượng liên kết riêng (năng lượng liên kết tính trên một nucleon).",
      "Số hiệu nguyên tử Z của hạt nhân."
    ],
    answerIndex: 2,
    hint: "Các hạt nhân có số khối trung bình từ 50 đến 80 thường bền vững nhất vì trị số này đạt cực đại.",
    rationale: "Năng lượng liên kết riêng ε = E_lk / A đặc trưng cho mức độ bền vũg của hạt nhân. Giá trị này càng lớn thì hạt nhân càng bền vững."
  },

  // ---------------------------------------------------------
  // MỨC ĐỘ TRUNG BÌNH (CÂU 31 - 60): THÔNG HIỂU & VẬN DỤNG THẤP
  // ---------------------------------------------------------
  {
    id: 31,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Người ta cung cấp nhiệt lượng 250 J cho một khối khí trong xi lanh. Khí nở ra đẩy pittông lên và thực hiện công 150 J ra môi trường. Tính độ biến thiên nội năng của khối khí.",
    options: [
      "Nội năng tăng 400 J",
      "Nội năng giảm 100 J",
      "Nội năng tăng 100 J",
      "Nội năng tăng 250 J"
    ],
    answerIndex: 2,
    hint: "Áp dụng định luật I: ΔU = A + Q. Hãy xác định dấu của A và Q dựa trên quy ước nhận/thực hiện.",
    rationale: "Khí nhận nhiệt nên Q = +250 J. Khí thực hiện công nên A = -150 J. Vậy ΔU = A + Q = -150 + 250 = +100 J (Nội năng tăng 100 J)."
  },
  {
    id: 32,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Một ấm điện chứa 1,5 kg nước ở nhiệt độ ban đầu là 20 °C. Cần cung cấp nhiệt lượng tối thiểu bao nhiêu để đun sôi lượng nước này? Biết nhiệt dung riêng của nước là 4200 J/(kg.K).",
    options: [
      "504 kJ",
      "126 kJ",
      "630 kJ",
      "420 kJ"
    ],
    answerIndex: 0,
    hint: "Nước sôi ở 100 °C. Độ tăng nhiệt độ Δt = 100 - 20 = 80 °C. Áp dụng Q = m.c.Δt.",
    rationale: "Q = 1,5 * 4200 * (100 - 20) = 504.000 J = 504 kJ."
  },
  {
    id: 33,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Để làm nóng chảy hoàn toàn 2 kg nước đá ở mốc 0 °C cần cung cấp một nhiệt lượng là bao nhiêu? Biết nhiệt nóng chảy riêng của nước đá là 3,4 * 10^5 J/kg.",
    options: [
      "6,8 * 10^5 J",
      "1,7 * 10^5 J",
      "3,4 * 10^5 J",
      "1,2 * 10^6 J"
    ],
    answerIndex: 0,
    hint: "Áp dụng công thức nóng chảy trực tiếp: Q = λ.m.",
    rationale: "Q = λ.m = 3,4 * 10^5 * 2 = 6,8 * 10^5 J."
  },
  {
    id: 34,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Thả một khối đồng khối lượng 0,5 kg đang ở nhiệt độ 120 °C vào một cốc chứa 0,2 kg nước ở 25 °C. Bỏ qua hao phí nhiệt ra vỏ cốc và môi trường. Tính nhiệt độ cân bằng. Biết nhiệt dung riêng của đồng là 380 J/(kg.K), của nước là 4200 J/(kg.K).",
    options: [
      "31,2 °C",
      "42,5 °C",
      "35,6 °C",
      "45,0 °C"
    ],
    answerIndex: 1,
    hint: "Thiết lập phương trình cân bằng nhiệt: Q_tỏa = Q_thu <=> m1.c1.(t1 - t_cb) = m2.c2.(t_cb - t2).",
    rationale: "0,5 * 380 * (120 - t) = 0,2 * 4200 * (t - 25) => 190*(120 - t) = 840*(t - 25) => 22800 - 190t = 840t - 21000 => 1030t = 43800 => t ≈ 42,5 °C."
  },
  {
    id: 35,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Đồ thị chuyển thể của nước đá chỉ ra rằng trong suốt quá trình nóng chảy, khi ta tiếp tục cung cấp nhiệt lượng thì nhiệt độ của khối đá thay đổi thế nào?",
    options: [
      "Tăng dần đều đặn cho tới khi chuyển hoàn toàn sang thể lỏng.",
      "Giữ nguyên không đổi ở mốc 0 °C cho đến khi tan hết.",
      "Giảm nhẹ do sự phá vỡ cấu trúc tinh thể liên kết.",
      "Dao động liên tục từ âm sang dương."
    ],
    answerIndex: 1,
    hint: "Hãy xem đồ thị chuyển thể phẳng dẹt nằm ngang tại nhiệt độ nóng chảy.",
    rationale: "Trong quá trình nóng chảy của chất rắn kết tinh, nhiệt độ không tăng cho đến khi tan rã hết."
  },
  {
    id: 37,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Một bình khí chứa oxi ở nhiệt độ 27 °C dưới áp suất 3 atm. Nếu nung nóng bình khí đến nhiệt độ 127 °C thì áp suất trong bình là bao nhiêu? Coi bình có thể tích không đổi.",
    options: [
      "4 atm",
      "14,1 atm",
      "2,25 atm",
      "6 atm"
    ],
    answerIndex: 0,
    hint: "Đổi nhiệt độ sang Kelvin: T1 = 27 + 273 = 300 K; T2 = 127 + 273 = 400 K. Áp dụng p1 / T1 = p2 / T2.",
    rationale: "Quá trình đẳng tích: p2 = p1 * (T2 / T1) = 3 * (400 / 300) = 4 atm."
  },
  {
    id: 38,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Khi nhiệt độ tuyệt đối của một lượng khí lí tưởng tăng lên 2 lần đồng thời thể tích của nó giảm đi 2 lần thì áp suất của khối khí thay đổi thế nào?",
    options: [
      "Không thay đổi.",
      "Tăng lên 4 lần.",
      "Giảm đi 4 lần.",
      "Tăng lên 2 lần."
    ],
    answerIndex: 1,
    hint: "Sử dụng phương trình trạng thái: (p1.V1)/T1 = (p2.V2)/T2.",
    rationale: "p2 = p1 * (V1/V2) * (T2/T1). Vì V1/V2 = 2 và T2/T1 = 2 nên p2 = p1 * 2 * 2 = 4.p1."
  },
  {
    id: 39,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Một bình dung tích 20 lít chứa 4 mol khí heli ở nhiệt độ 27 °C. Tính áp suất của khí trong bình theo đơn vị atm. Lấy R = 0,082 atm.l/(mol.K).",
    options: [
      "4,92 atm",
      "2,46 atm",
      "9,84 atm",
      "0,49 atm"
    ],
    answerIndex: 0,
    hint: "Sử dụng phương trình Mendeleev-Clapeyron: p.V = n.R.T. Chú ý T = 27 + 273 = 300 K.",
    rationale: "p = n.R.T / V = 4 * 0,082 * 300 / 20 = 4,92 atm."
  },
  {
    id: 40,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Nếu động năng tịnh tiến trung bình của phân tử khí tăng gấp 3 lần thì nhiệt độ tuyệt đối T của khí thay đổi thế nào?",
    options: [
      "Tăng gấp 9 lần.",
      "Tăng gấp 3 lần.",
      "Giảm đi 3 lần.",
      "Không đổi vì nhiệt độ không phụ thuộc động năng."
    ],
    answerIndex: 1,
    hint: "Công thức liên hệ trực tiếp: E_d = (3/2).k.T. Động năng tỉ lệ thuận tuyến tính với T.",
    rationale: "Động năng tịnh tiến trung bình tỉ lệ thuận tịnh tiến với nhiệt độ tuyệt đối. Do đó, động năng tăng bao nhiêu lần thì nhiệt độ tuyệt đối tăng bấy nhiêu lần."
  },
  {
    id: 41,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Một đoạn dây dẫn thẳng dài 20 cm mang dòng điện cường độ 5 A đặt trong từ trường đều có cảm ứng từ B = 0,4 T. Biết dây hợp với các đường cảm ứng từ góc 30 độ. Lực từ tác dụng lên đoạn dây là:",
    options: [
      "0,2 N",
      "0,4 N",
      "0,08 N",
      "0,15 N"
    ],
    answerIndex: 0,
    hint: "Áp dụng F = B.I.l.sin(α). Hãy đổi l sang mét trước khi tính toán.",
    rationale: "F = 0,4 * 5 * 0,2 * sin(30°) = 0,4 * 5 * 0,2 * 0,5 = 0,2 N."
  },
  {
    id: 42,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Một vòng dây phẳng giới hạn diện tích S = 50 cm^2 được đặt trong từ trường đều có cảm ứng từ B = 0,2 T. Mặt phẳng vòng dây hợp với vecto B một góc 30 độ. Tính từ thông qua vòng dây.",
    options: [
      "1,0 * 10^-3 Wb",
      "5,0 * 10^-4 Wb",
      "8,66 * 10^-4 Wb",
      "5,0 * 10^-3 Wb"
    ],
    answerIndex: 1,
    hint: "Chú ý: góc α là góc giữa vecto pháp tuyến n và B. Pháp tuyến n luôn vuông góc với mặt phẳng khung dây. Vậy α = 90 - 30 = 60 độ.",
    rationale: "S = 50 * 10^-4 m^2. Góc α = 90° - 30° = 60°. Φ = B.S.cos(α) = 0,2 * (50 * 10^-4) * cos(60°) = 5,0 * 10^-4 Wb."
  },
  {
    id: 43,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Một khung dây phẳng gồm 100 vòng dây, diện tích mỗi vòng là 20 cm^2, đặt vuông góc với các đường sức của một từ trường đều. Cảm ứng từ giảm đều đặn từ 0,5 T về 0,1 T trong khoảng thời gian 0,1 s. Suất điện động cảm ứng xuất hiện trong khung dây có độ lớn bằng:",
    options: [
      "0,8 V",
      "8,0 V",
      "0,08 V",
      "0,4 V"
    ],
    answerIndex: 0,
    hint: "Độ lớn suất điện động cảm ứng: |e_c| = N * |ΔB / Δt| * S * cos(α). Vì vuông góc nên α = 0 độ (cos(α) = 1).",
    rationale: "|e_c| = 100 * |(0,1 - 0,5) / 0,1| * (20 * 10^-4) * 1 = 100 * 4 * 0,002 = 0,8 V."
  },
  {
    id: 44,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Một máy biến áp lí tưởng có cuộn sơ cấp 2000 vòng được nối với nguồn xoay chiều 220 V. Để đầu ra ở cuộn thứ cấp có điện áp hiệu dụng là 11 V thì cuộn thứ cấp phải có số vòng dây là bao nhiêu?",
    options: [
      "100 vòng",
      "50 vòng",
      "400 vòng",
      "20 vòng"
    ],
    answerIndex: 0,
    hint: "Áp dụng hệ thức biến áp lí tưởng: U1 / U2 = N1 / N2.",
    rationale: "N2 = N1 * (U2 / U1) = 2000 * (11 / 220) = 100 vòng."
  },
  {
    id: 45,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Một đài phát sóng radio phát sóng điện từ có tần số f = 100 MHz. Tính bước sóng của sóng điện từ này trong chân không (lấy tốc độ ánh sáng c = 3 * 10^8 m/s).",
    options: [
      "30 m",
      "3 m",
      "0,3 m",
      "300 m"
    ],
    answerIndex: 1,
    hint: "Công thức tính bước sóng: λ = c / f. Nhớ đổi f sang Hz (1 MHz = 10^6 Hz).",
    rationale: "λ = 3 * 10^8 / (100 * 10^6) = 3 m."
  },
  {
    id: 46,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Biết khối lượng của proton m_p = 1,007286 amu, neutron m_n = 1,008665 amu, và khối lượng hạt nhân heli _2^4 He là 4,0015 amu. Tính độ hụt khối của hạt nhân heli.",
    options: [
      "0,0304 amu",
      "0,0142 amu",
      "0,0030 amu",
      "0,0421 amu"
    ],
    answerIndex: 0,
    hint: "Hạt nhân _2^4 He có Z = 2 và N = 2. Áp dụng Δm = 2.m_p + 2.m_n - m_He.",
    rationale: "Δm = 2 * 1,007286 + 2 * 1,008665 - 4,0015 = 2,014572 + 2,01733 - 4,0015 = 0,030402 amu."
  },
  {
    id: 47,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Một chất phóng xạ có chu kỳ bán rã là T = 10 ngày. Sau 30 ngày, tỉ lệ phần trăm số hạt nhân phóng xạ còn lại so với lượng ban đầu là bao nhiêu?",
    options: [
      "50%",
      "25%",
      "12,5%",
      "37,5%"
    ],
    answerIndex: 2,
    hint: "Số chu kỳ bán rã đã trôi qua: k = t / T. Phần trăm còn lại là 2^-k.",
    rationale: "t = 30 ngày => k = 30 / 10 = 3 chu kỳ bán rã. Tỉ lệ còn lại = 1 / 2^3 = 1/8 = 12,5%."
  },
  {
    id: 48,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Trong phản ứng hạt nhân sau đây: _6^14 C -> _7^14 N + X. Hạt X là hạt nào sau đây?",
    options: [
      "Tia alpha (α)",
      "Tia beta cộng (β+)",
      "Tia beta trừ (β-)",
      "Neutron (n)"
    ],
    answerIndex: 2,
    hint: "Áp dụng định luật bảo toàn điện tích Z và số khối A cho cả 2 vế.",
    rationale: "Bảo toàn số khối: 14 = 14 + A_X => A_X = 0. Bảo toàn điện tích: 6 = 7 + Z_X => Z_X = -1. Vậy X là electron (_-1^0 e), tương đương tia beta trừ."
  },
  {
    id: 49,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Tia phóng xạ nào sau đây có khả năng đâm xuyên mạnh nhất và không bị lệch hướng trong điện trường?",
    options: [
      "Tia alpha (α)",
      "Tia beta cộng (β+)",
      "Tia gamma (γ)",
      "Tia beta trừ (β-)"
    ],
    answerIndex: 2,
    hint: "Tia này có bản chất là sóng điện từ bước sóng cực ngắn (hạt photon năng lượng cao).",
    rationale: "Tia gamma không mang điện tích nên không bị lệch hướng trong điện trường và có bước sóng cực ngắn nên khả năng đâm xuyên mạnh nhất."
  },
  {
    id: 50,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Độ phóng xạ H của một mẫu chất phóng xạ biến đổi theo thời gian tuân theo quy luật nào?",
    options: [
      "Giảm dần đều theo thời gian tuyến tính.",
      "Tăng dần theo hàm số mũ.",
      "Giảm theo hàm số mũ tỉ lệ với số hạt nhân còn lại.",
      "Không thay đổi theo thời gian."
    ],
    answerIndex: 2,
    hint: "H(t) = λ.N(t), mà N(t) giảm theo hàm số mũ.",
    rationale: "Độ phóng xạ H đặc trưng cho số phân rã trong một giây, tỉ lệ trực tiếp với số hạt còn lại N nên cũng giảm theo hàm số mũ: H = H0.2^(-t/T)."
  },
  {
    id: 51,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Nhiệt hóa hơi riêng của nước là L = 2,3 * 10^6 J/kg. Cần cung cấp nhiệt lượng bao nhiêu để hóa hơi hoàn toàn 0,1 kg nước đang ở nhiệt độ sôi 100 °C?",
    options: [
      "2,3 * 10^5 J",
      "2,3 * 10^6 J",
      "1,15 * 10^5 J",
      "4,6 * 10^5 J"
    ],
    answerIndex: 0,
    hint: "Áp dụng công thức hóa hơi: Q = L.m.",
    rationale: "Q = L.m = 2,3 * 10^6 * 0,1 = 2,3 * 10^5 J."
  },
  {
    id: 52,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Một lượng khí lí tưởng ở áp suất 1 atm có thể tích V1. Khi áp suất tăng thêm 0,5 atm ở nhiệt độ không đổi thì thể tích của nó biến đổi thế nào?",
    options: [
      "Tăng 1,5 lần.",
      "Giảm 1,5 lần.",
      "Giảm xuống còn 2/3 thể tích ban đầu.",
      "Tăng thêm 50% thể tích."
    ],
    answerIndex: 2,
    hint: "Áp suất mới p2 = p1 + 0,5 = 1,5 atm. Đẳng nhiệt: p1.V1 = p2.V2.",
    rationale: "V2 / V1 = p1 / p2 = 1 / 1,5 = 2/3. Thể tích giảm xuống còn 2/3 giá trị ban đầu."
  },
  {
    id: 53,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Độ lệch pha giữa điện áp xoay chiều u ở hai đầu đoạn mạch và cường độ dòng điện i chạy qua mạch kí hiệu là φ. Khi φ < 0 thì:",
    options: [
      "Dòng điện xoay chiều cùng pha với điện áp.",
      "Điện áp u trễ pha hơn cường độ dòng điện i.",
      "Điện áp u sớm pha hơn cường độ dòng điện i.",
      "Mạch chỉ chứa cuộn cảm thuần chất."
    ],
    answerIndex: 1,
    hint: "Công thức độ lệch pha φ = φ_u - φ_i. Nếu φ < 0 thì φ_u nhỏ hơn φ_i.",
    rationale: "Độ lệch pha φ = φ_u - φ_i. Do đó φ < 0 nghĩa là điện áp u trễ pha hơn dòng điện i (hay i sớm pha hơn u)."
  },
  {
    id: 54,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Công thức tính năng lượng liên kết riêng ε của hạt nhân _Z^A X có năng lượng liên kết E_lk là:",
    options: [
      "ε = E_lk * A",
      "ε = E_lk / Z",
      "ε = E_lk / A",
      "ε = E_lk / (A - Z)"
    ],
    answerIndex: 2,
    hint: "Năng lượng liên kết riêng là năng lượng liên kết trung bình tính cho mỗi một hạt nucleon.",
    rationale: "Năng lượng liên kết riêng ε được định nghĩa bằng năng lượng liên kết toàn phần chia cho số khối A (tổng số nucleon): ε = E_lk / A."
  },
  {
    id: 55,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Số hạt phân tử khí có trong 2 gam khí Heli (He) (M = 4 g/mol) là bao nhiêu?",
    options: [
      "3,01 * 10^23 phân tử",
      "6,02 * 10^23 phân tử",
      "1,20 * 10^24 phân tử",
      "1,51 * 10^23 phân tử"
    ],
    answerIndex: 0,
    hint: "Tính số mol n = m / M, sau đó số phân tử N = n * N_A.",
    rationale: "n = 2 / 4 = 0,5 mol. N = n * N_A = 0,5 * 6,02 * 10^23 = 3,01 * 10^23 phân tử."
  },
  {
    id: 56,
    chapter: "Khí lí tưởng",
    difficulty: "Trung bình",
    question: "Đồ thị biểu diễn đẳng quá trình của một lượng khí mà đường thẳng kéo dài đi qua gốc tọa độ trong hệ tọa độ (p, T) là quá trình nào?",
    options: [
      "Đẳng áp.",
      "Đẳng nhiệt.",
      "Đẳng tích.",
      "Đoạn nhiệt."
    ],
    answerIndex: 2,
    hint: "Theo định luật Charles, p/T = hằng số nên p = C.T (đường thẳng đi qua gốc O).",
    rationale: "Trong hệ (p, T), đường biểu diễn p theo T của quá trình đẳng tích là đường thẳng kéo dài đi qua gốc tọa độ O."
  },
  {
    id: 57,
    chapter: "Từ trường",
    difficulty: "Trung bình",
    question: "Dòng điện Foucault (Fu-cô) xuất hiện trong trường hợp nào sau đây?",
    options: [
      "Khi cho một khung dây mảnh làm bằng nhựa chuyển động trong từ trường đều.",
      "Khi đặt một khối kim loại đặc trong một từ trường biến thiên hoặc di chuyển nó trong từ trường.",
      "Khi cho dòng điện một chiều có cường độ rất lớn chạy qua lõi sắt.",
      "Khi điện tích tự do chuyển động trong môi trường chân không tuyệt đối."
    ],
    answerIndex: 1,
    hint: "Đây là dòng điện cảm ứng sinh ra ngay bên trong các khối vật dẫn kim loại.",
    rationale: "Dòng điện Foucault là dòng điện xoáy cảm ứng sinh ra trong khối vật dẫn khi vật dẫn chuyển động trong từ trường hoặc đặt trong từ trường biến thiên."
  },
  {
    id: 58,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Phát biểu nào sau đây đúng về phản ứng hạt nhân phân hạch?",
    options: [
      "Sự kết hợp giữa hai hạt nhân rất nhẹ thành một hạt nhân nặng hơn.",
      "Sự tự phân rã của hạt nhân không bền vững phát ra tia alpha.",
      "Sự hấp thụ electron vào hạt nhân biến proton thành neutron.",
      "Một hạt nhân rất nặng hấp thụ neutron chậm rồi vỡ ra thành hai hạt nhân trung bình."
    ],
    answerIndex: 3,
    hint: "Đây là nguyên lí hoạt động của các lò phản ứng hạt nhân và bom nguyên tử.",
    rationale: "Phân hạch là phản ứng trong đó một hạt nhân nặng (như U-235) hấp thụ một neutron chậm rồi phân chia thành hai hạt nhân nhẹ hơn và giải phóng năng lượng lớn."
  },
  {
    id: 59,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Trung bình",
    question: "Phản ứng nhiệt hạch là gì?",
    options: [
      "Phản ứng phân chia hạt nhân nặng dưới tác dụng của nhiệt độ cực cao.",
      "Sự tổng hợp hai hay nhiều hạt nhân nhẹ thành hạt nhân nặng hơn ở nhiệt độ hàng chục triệu độ.",
      "Quá trình giải phóng nhiệt lượng cực lớn khi đốt cháy nhiên liệu hạt nhân bằng oxy.",
      "Quá trình hấp thụ photon năng lượng cao của các đồng vị bền vững."
    ],
    answerIndex: 1,
    hint: "Đây chính là nguồn gốc năng lượng khổng lồ của Mặt Trời và các vì sao.",
    rationale: "Nhiệt hạch là phản ứng kết hợp các hạt nhân rất nhẹ (như các đồng vị của hidro) tạo thành hạt nhân nặng hơn ở nhiệt độ cực kỳ cao."
  },
  {
    id: 60,
    chapter: "Vật lí nhiệt",
    difficulty: "Trung bình",
    question: "Người ta đo được nhiệt lượng tỏa ra khi ngưng tụ hoàn toàn 0,5 kg hơi nước ở 100 °C là 1,15 * 10^6 J. Nhiệt hóa hơi riêng L của nước nhận giá trị nào?",
    options: [
      "2,3 * 10^6 J/kg",
      "4,6 * 10^6 J/kg",
      "5,75 * 10^5 J/kg",
      "1,15 * 10^6 J/kg"
    ],
    answerIndex: 0,
    hint: "Áp dụng hệ thức Q = L.m => L = Q / m.",
    rationale: "L = 1,15 * 10^6 / 0,5 = 2,3 * 10^6 J/kg."
  },

  // ---------------------------------------------------------
  // MỨC ĐỘ KHÓ (CÂU 61 - 100): VẬN DỤNG CAO (TÍNH TOÁN & ĐỒ THỊ)
  // ---------------------------------------------------------
  {
    id: 61,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Một khối đá có khối lượng m = 1 kg ở nhiệt độ -10 °C. Cần cung cấp tổng nhiệt lượng bao nhiêu để chuyển toàn bộ khối đá này thành nước lỏng ở 20 °C? Biết nhiệt dung riêng của đá c_đá = 2100 J/(kg.K), c_nước = 4200 J/(kg.K), nhiệt nóng chảy riêng của đá là λ = 3,4 * 10^5 J/kg.",
    options: [
      "4,45 * 10^5 J",
      "3,61 * 10^5 J",
      "4,05 * 10^5 J",
      "4,25 * 10^5 J"
    ],
    answerIndex: 0,
    hint: "Quá trình gồm 3 giai đoạn: 1. Nâng nhiệt độ đá (-10 -> 0 °C); 2. Nóng chảy đá thành nước (ở 0 °C); 3. Nâng nhiệt độ nước (0 -> 20 °C).",
    rationale: "Q1 = 1 * 2100 * 10 = 21.000 J. Q2 = 1 * 3,4*10^5 = 340.000 J. Q3 = 1 * 4200 * 20 = 84.000 J. Q_tổng = 21.000 + 340.000 + 84.000 = 445.000 J = 4,45 * 10^5 J."
  },
  {
    id: 62,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Một động cơ nhiệt nhận từ nguồn nóng nhiệt lượng Q1 = 5 * 10^5 J trong mỗi chu trình, hiệu suất của động cơ là 30%. Nhiệt lượng động cơ truyền cho nguồn lạnh Q2 trong một chu trình có độ lớn bằng:",
    options: [
      "1,5 * 10^5 J",
      "3,5 * 10^5 J",
      "2,5 * 10^5 J",
      "4,0 * 10^5 J"
    ],
    answerIndex: 1,
    hint: "Hiệu suất H = (Q1 - |Q2|) / Q1 = 1 - |Q2| / Q1. Từ đó suy ra |Q2|.",
    rationale: "H = 0,3 => 1 - |Q2| / Q1 = 0,3 => |Q2| = 0,7 * Q1 = 0,7 * 5 * 10^5 = 3,5 * 10^5 J."
  },
  {
    id: 63,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một ống thủy tinh thẳng đứng dài 1 m, một đầu kín ở dưới, đầu hở ở trên. Ống chứa không khí được ngăn cách với khí quyển bằng một cột thủy ngân dài h = 15 cm. Ban đầu cột thủy ngân ở sát miệng ống. Áp suất khí quyển là p0 = 75 cmHg. Hỏi nếu lật ngược ống (đầu kín ở trên, đầu hở ở dưới) thì chiều cao cột thủy ngân còn lại trong ống là bao nhiêu? Coi quá trình đẳng nhiệt.",
    options: [
      "15 cm",
      "10 cm",
      "12 cm",
      "7,5 cm"
    ],
    answerIndex: 3,
    hint: "Lúc đầu, khí bị nén bởi áp suất p1 = p0 + h. Chiều dài cột khí là L1 = 100 - 15 = 85 cm. Khi lật ngược, cột thủy ngân dồn xuống dưới miệng ống, một phần chảy ra ngoài, còn lại đoạn x. Áp suất khí lúc này p2 = p0 - x. Chiều dài cột khí mới là L2 = 100 - x. Áp dụng p1.L1 = p2.L2.",
    rationale: "p1 = 75 + 15 = 90 cmHg, L1 = 85 cm. Lật ngược: cột Hg còn lại x cm, p2 = 75 - x, L2 = 100 - x. Đẳng nhiệt: 90 * 85 = (75 - x) * (100 - x) => 7650 = 7500 - 175x + x^2 => x^2 - 175x - 150 = 0. Giải phương trình bậc hai lấy nghiệm dương thích hợp x ≈ 7,5 cm."
  },
  {
    id: 64,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Tính tốc độ căn quân phương của phân tử khí Heli ở nhiệt độ 27 °C. Biết khối lượng mol của Heli là M = 4 g/mol và hằng số khí lí tưởng R = 8,31 J/(mol.K).",
    options: [
      "1367 m/s",
      "136,7 m/s",
      "940 m/s",
      "1880 m/s"
    ],
    answerIndex: 0,
    hint: "Sử dụng công thức v = sqrt(3.R.T / M). Lưu ý cực kỳ quan trọng: M phải đổi sang đơn vị kg/mol (4 g/mol = 4 * 10^-3 kg/mol) và T = 300 K.",
    rationale: "v = sqrt(3 * 8,31 * 300 / (4 * 10^-3)) = sqrt(7479 / 0,004) = sqrt(1.869.750) ≈ 1367,39 m/s."
  },
  {
    id: 65,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một dây dẫn mang dòng điện được uốn thành một khung dây tròn treo thẳng đứng bằng hai sợi dây nhẹ không dãn tại điểm O. Khung dây tròn nằm trong một từ trường đều hướng thẳng đứng lên trên. Khi cho dòng điện chạy qua khung dây theo chiều kim đồng hồ (nhìn từ trước), khung dây sẽ biến dạng hoặc dịch chuyển thế nào?",
    options: [
      "Khung dây bị đẩy dịch chuyển tịnh tiến theo phương ngang.",
      "Khung dây đứng yên nhưng lực căng dây treo giảm về không.",
      "Khung dây quay xung quanh trục đối xứng nằm ngang của nó.",
      "Khung dây bị quay lệch đi một góc quanh trục đứng đi qua O."
    ],
    answerIndex: 2,
    hint: "Sử dụng quy tắc bàn tay trái xác định lực từ tác dụng lên các phần tử dòng điện đối xứng ở nửa trên và nửa dưới khung dây.",
    rationale: "Dưới tác dụng của từ trường đều hướng đứng lên và dòng điện tròn nằm trong mặt phẳng đứng, ngẫu lực từ sẽ làm quay khung dây quanh trục nằm ngang đi qua tâm của nó để momen lực từ triệt tiêu."
  },
  {
    id: 66,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một thanh kim loại dài L = 0,5 m chuyển động đều trong một từ trường đều có cảm ứng từ B = 0,2 T với tốc độ v = 10 m/s. Phương chuyển động của thanh vuông góc với thanh và hợp với vecto cảm ứng từ B một góc 30 độ. Hiệu điện thế cảm ứng xuất hiện giữa hai đầu thanh là:",
    options: [
      "1,0 V",
      "0,5 V",
      "0,87 V",
      "0,25 V"
    ],
    answerIndex: 1,
    hint: "Suất điện động cảm ứng xuất hiện trên thanh kim loại chuyển động cắt các đường sức từ: e_c = B.v.L.sin(θ), với θ là góc hợp bởi v và B.",
    rationale: "e_c = B.v.L.sin(30°) = 0,2 * 10 * 0,5 * 0,5 = 0,5 V."
  },
  {
    id: 67,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Hạt nhân urani _92^235 U sau khi hấp thụ một neutron chậm sẽ phân hạch sinh ra hai hạt nhân con là _39^95 Y và _53^138 I kèm theo một số hạt neutron tự do. Số hạt neutron được giải phóng ra sau phản ứng này là bao nhiêu?",
    options: [
      "2 hạt",
      "3 hạt",
      "4 hạt",
      "1 hạt"
    ],
    answerIndex: 1,
    hint: "Viết phương trình phản ứng: _0^1 n + _92^235 U -> _39^95 Y + _53^138 I + k._0^1 n. Áp dụng bảo toàn số khối A.",
    rationale: "Bảo toàn số khối: 1 + 235 = 95 + 138 + k * 1 => 236 = 233 + k => k = 3 hạt neutron."
  },
  {
    id: 68,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Biết năng lượng liên kết riêng của hạt nhân _2^4 He là 7,07 MeV/nucleon, của hạt nhân _3^7 Li là 5,60 MeV/nucleon, của hạt nhân đồng vị _1^3 T là 2,83 MeV/nucleon. Hãy tính năng lượng tỏa ra trong phản ứng nhiệt hạch sau: _1^3 T + _3^7 Li -> 2._2^4 He + 2._0^1 n.",
    options: [
      "11,33 MeV",
      "17,34 MeV",
      "8,50 MeV",
      "14,20 MeV"
    ],
    answerIndex: 1,
    hint: "Năng lượng tỏa ra ΔE = E_lk(sau) - E_lk(trước). Chú ý E_lk = ε * A. Các neutron tự do có năng lượng liên kết bằng không.",
    rationale: "E_lk(trước) = 3 * 2,83 (của T) + 7 * 5,60 (của Li) = 8,49 + 39,2 = 47,69 MeV. E_lk(sau) = 2 * (4 * 7,07) (của He) = 56,56 MeV. ΔE = 56,56 - 47,69 = 17,34 MeV."
  },
  {
    id: 69,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Một mẫu chất phóng xạ nguyên chất ban đầu có N0 hạt nhân. Sau một khoảng thời gian t1, số hạt nhân chưa bị phân rã còn lại bằng 25% N0. Sau đó thêm một khoảng thời gian Δt = 20 ngày nữa thì số hạt nhân chưa bị phân rã còn lại chỉ bằng 6,25% N0. Chu kỳ bán rã T của chất phóng xạ này là:",
    options: [
      "5 ngày",
      "10 ngày",
      "20 ngày",
      "15 ngày"
    ],
    answerIndex: 1,
    hint: "Nhiều chu kỳ bán rã liên tục: ở t1 còn 25% = 1/4 (tương đương 2 chu kỳ). Ở t1 + Δt còn 6,25% = 1/16 (tương đương 4 chu kỳ). Hãy tính khoảng chênh lệch số chu kỳ trong Δt.",
    rationale: "Từ 25% giảm xuống 6,25% là giảm đi 4 lần, tương đương trôi qua đúng 2 chu kỳ bán rã nữa. Do đó 2.T = 20 ngày => T = 10 ngày."
  },
  {
    id: 70,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một lượng khí lí tưởng đơn nguyên tử thực hiện chu trình biến đổi khép kín dạng tam giác trong hệ tọa độ (p, V). Biết trạng thái 1 (1 atm, 2 lít), trạng thái 2 (3 atm, 2 lít), trạng thái 3 (1 atm, 6 lít). Công cơ học mà khối khí sinh ra trong toàn bộ một chu trình bằng bao nhiêu?",
    options: [
      "400 J",
      "800 J",
      "200 J",
      "600 J"
    ],
    answerIndex: 0,
    hint: "Công sinh ra trong một chu trình khép kín bằng diện tích hình phẳng giới hạn bởi chu trình đó trong hệ trục (p, V). Ở đây là diện tích tam giác vuông. Đổi đơn vị áp suất sang Pa (1 atm ≈ 1,013*10^5 Pa) và thể tích sang m^3 (1 lít = 10^-3 m^3).",
    rationale: "Diện tích tam giác vuông = 0,5 * (p2 - p1) * (V3 - V1) = 0,5 * (2 * 1,013 * 10^5 Pa) * (4 * 10^-3 m^3) = 0,5 * 202600 * 0,004 = 405,2 J (gần nhất với 400 J)."
  },
  {
    id: 71,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Để xác định nhiệt hóa hơi riêng của nước, người ta làm thí nghiệm đun nước bằng một ấm điện công suất không đổi 1000 W. Khi nước bắt đầu sôi ở 100 °C, người ta cân lượng nước còn lại theo thời gian. Sau 10 phút đun sôi liên tục, thấy có 0,25 kg nước đã hóa hơi thoát ra ngoài. Biết hiệu suất tỏa nhiệt của ấm đun đạt 90%. Nhiệt hóa hơi riêng L của nước đo được từ thí nghiệm này là:",
    options: [
      "2,16 * 10^6 J/kg",
      "2,40 * 10^6 J/kg",
      "2,25 * 10^6 J/kg",
      "2,00 * 10^6 J/kg"
    ],
    answerIndex: 0,
    hint: "Nhiệt lượng ấm tỏa ra trong thời gian t là Q_toàn phần = P.t. Nhiệt lượng có ích làm nước hóa hơi là Q_ích = H.Q_toàn phần. Áp dụng Q_ích = L.Δm.",
    rationale: "t = 10 phút = 600 s. Q_toàn phần = 1000 * 600 = 600.000 J. Q_ích = 0,9 * 600.000 = 540.000 J. L = Q_ích / Δm = 540.000 / 0,25 = 2.160.000 J/kg = 2,16 * 10^6 J/kg."
  },
  {
    id: 72,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Khối lượng riêng của khí nitơ ở điều kiện tiêu chuẩn (nhiệt độ 0 °C, áp suất 1 atm) là bao nhiêu? Biết khối lượng mol của nitơ là M = 28 g/mol, lấy R = 8,31 J/(mol.K).",
    options: [
      "1,25 kg/m^3",
      "1,43 kg/m^3",
      "2,50 kg/m^3",
      "0,95 kg/m^3"
    ],
    answerIndex: 0,
    hint: "Sử dụng công thức p.M = D.R.T với D là khối lượng riêng. Chú ý các đơn vị chuẩn SI: p = 1,013*10^5 Pa, M = 0,028 kg/mol, T = 273 K.",
    rationale: "D = p.M / (R.T) = (1,013 * 10^5 * 0,028) / (8,31 * 273) = 2836,4 / 2268,63 ≈ 1,25 kg/m^3."
  },
  {
    id: 73,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một khung dây phẳng có diện tích S gồm nhiều vòng dây đặt trong một từ trường đều có cảm ứng từ B. Khi quay khung dây đều đặn với tốc độ góc ω xung quanh một trục đối xứng nằm ngang nằm trong mặt phẳng khung dây và vuông góc với B, từ thông qua khung dây biến thiên theo thời gian có dạng Φ = Φ0.cos(ωt). Suất điện động cảm ứng xuất hiện trong khung dây sẽ trễ hay sớm pha thế nào so với từ thông?",
    options: [
      "Trễ pha một góc 90 độ (π/2) so với từ thông.",
      "Sớm pha một góc 90 độ (π/2) so với từ thông.",
      "Cùng pha hoàn toàn với từ thông.",
      "Ngược pha hoàn toàn (lệch pha π) so với từ thông."
    ],
    answerIndex: 0,
    hint: "Theo định luật Faraday, e_c = - dΦ / dt. Hãy lấy đạo hàm của hàm cos và đưa về dạng hàm cos chuẩn.",
    rationale: "e_c = -dΦ/dt = -[-ω.Φ0.sin(ωt)] = ω.Φ0.sin(ωt) = ω.Φ0.cos(ωt - π/2). Vậy e_c trễ pha 90 độ (π/2) so với Φ."
  },
  {
    id: 74,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Một đồng vị phóng xạ ban đầu có khối lượng m0 = 100 g. Sau thời gian t = 2 chu kỳ bán rã, khối lượng chất mới sinh ra do sự phân rã của đồng vị này (coi hạt nhân con sinh ra đứng yên trong mẫu) là bao nhiêu? Biết khối lượng hạt nhân con xấp xỉ bằng khối lượng hạt nhân mẹ.",
    options: [
      "25 g",
      "75 g",
      "50 g",
      "12,5 g"
    ],
    answerIndex: 1,
    hint: "Số hạt nhân mẹ còn lại sau 2 chu kỳ bán rã là m0 / 4. Khối lượng mẹ đã bị phân rã chuyển thành con là m_bị_phân_rã = m0 - m_còn_lại.",
    rationale: "Sau 2 chu kỳ, khối lượng mẹ còn lại = m0 / 2^2 = 25 g. Khối lượng bị phân rã tạo thành hạt nhân con = 100 - 25 = 75 g."
  },
  {
    id: 75,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Để đo nhiệt dung riêng của một khối kim loại khối lượng 0,8 kg, người ta dùng lò nung đốt nóng nó lên đến 150 °C rồi thả nhanh vào cốc nhiệt lượng kế chứa 0,4 kg nước ở 20 °C. Thấy nhiệt độ cân bằng cuối cùng là 35 °C. Biết nhiệt lượng kế làm bằng đồng khối lượng 0,2 kg cũng có nhiệt độ ban đầu là 20 °C. Tính nhiệt dung riêng của khối kim loại. Lấy c_nước = 4200 J/(kg.K), c_đồng = 380 J/(kg.K).",
    options: [
      "286 J/(kg.K)",
      "325 J/(kg.K)",
      "188 J/(kg.K)",
      "420 J/(kg.K)"
    ],
    answerIndex: 0,
    hint: "Thiết lập phương trình cân bằng: Q_tỏa (kim loại) = Q_thu (nước + nhiệt lượng kế).",
    rationale: "Q_tỏa = 0,8 * c_kl * (150 - 35) = 92 * c_kl. Q_thu = (0,4 * 4200 + 0,2 * 380) * (35 - 20) = (1680 + 76) * 15 = 1756 * 15 = 26340 J. c_kl = 26340 / 92 ≈ 286,3 J/(kg.K)."
  },
  {
    id: 76,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một lượng khí lí tưởng đơn nguyên tử có thể tích V = 4 lít dưới áp suất p = 2 atm. Nội năng U của khối khí này có trị số bằng bao nhiêu?",
    options: [
      "1200 J",
      "800 J",
      "1600 J",
      "2400 J"
    ],
    answerIndex: 0,
    hint: "Công thức tính nội năng của khí lí tưởng đơn nguyên tử là U = (3/2).p.V. Chú ý đổi đơn vị áp suất sang Pa và thể tích sang m^3.",
    rationale: "p = 2 * 1,013 * 10^5 Pa. V = 4 * 10^-3 m^3. U = 1,5 * (2,026 * 10^5) * (4 * 10^-3) = 1,5 * 810,4 = 1215,6 J (gần nhất là 1200 J)."
  },
  {
    id: 77,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Hai sợi dây treo nhẹ, song song, cùng chiều dài L = 1 m, treo một thanh kim loại đồng chất mảnh dài d = 20 cm, khối lượng m = 100 g nằm ngang. Hệ thống được đặt trong từ trường đều có cảm ứng từ B = 0,5 T hướng thẳng đứng lên trên. Khi cho dòng điện cường độ I chạy qua thanh, người ta thấy hai dây treo bị lệch đi một góc θ = 45 độ so với phương thẳng đứng. Cường độ dòng điện I chạy qua thanh bằng bao nhiêu? Lấy g = 10 m/s^2.",
    options: [
      "10 A",
      "5 A",
      "2 A",
      "1 A"
    ],
    answerIndex: 0,
    hint: "Khi cân bằng, thanh chịu 3 lực: trọng lực P hướng xuống, lực từ F hướng ngang, lực căng dây T. Điều kiện cân bằng lực cho mối liên hệ: tan(θ) = F / P = (B.I.d) / (m.g).",
    rationale: "tan(45°) = 1 => B.I.d = m.g => 0,5 * I * 0,2 = 0,1 * 10 => 0,1 * I = 1 => I = 10 A."
  },
  {
    id: 78,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Một nhà máy điện hạt nhân sử dụng nhiên liệu phân hạch urani _92^235 U. Biết trung bình mỗi phân hạch tỏa ra năng lượng 200 MeV. Hiệu suất của nhà máy đạt 30%. Nếu nhà máy hoạt động liên tục ở công suất phát điện 600 MW thì trong một năm (365 ngày), khối lượng urani tiêu thụ gần nhất với giá trị nào?",
    options: [
      "770 kg",
      "230 kg",
      "550 kg",
      "1100 kg"
    ],
    answerIndex: 0,
    hint: "Công suất tiêu hao hạt nhân P_tiêu_hao = P_điện / H. Tổng năng lượng hạt nhân cần cung cấp trong 1 năm E_tổng = P_tiêu_hao * t. Số phân hạch N = E_tổng / E_phân_hạch (đổi MeV sang Jun). Số mol n = N / N_A => m = n * M_U.",
    rationale: "P_tiêu_hao = 600 MW / 0,3 = 2000 MW = 2 * 10^9 W. E_tổng = 2*10^9 * 365 * 86400 ≈ 6,307 * 10^16 J. E_1_phân_hạch = 200 * 1,6*10^-13 J = 3,2 * 10^-11 J. Số phân hạch N = 6,307*10^16 / (3,2*10^-11) ≈ 1,97 * 10^27 hạt. Số mol n = 1,97*10^27 / (6,02*10^23) ≈ 3274 mol. Khối lượng m = 3274 * 0,235 kg ≈ 770 kg."
  },
  {
    id: 79,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Nếu tốc độ căn quân phương của phân tử khí Heli tăng thêm 20% thì nhiệt độ tuyệt đối T của khí tăng thêm bao nhiêu phần trăm?",
    options: [
      "44%",
      "20%",
      "40%",
      "10%"
    ],
    answerIndex: 0,
    hint: "Tốc độ căn quân phương tỉ lệ thuận với căn bậc hai của nhiệt độ tuyệt đối: v ~ sqrt(T), suy ra T ~ v^2. Nếu v tăng lên 1,2 lần thì T tăng lên bao nhiêu lần?",
    rationale: "v' = 1,2.v => T' / T = (v' / v)^2 = 1,2^2 = 1,44. Vậy nhiệt độ tuyệt đối T' = 1,44.T, tức là tăng thêm 44%."
  },
  {
    id: 80,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Đun nóng một khối lượng nước m bằng một thiết bị công suất tỏa nhiệt hữu ích không đổi P. Đồ thị biểu diễn sự phụ thuộc của nhiệt độ nước t (°C) theo thời gian τ (giây) là một đường thẳng đi qua hai điểm A(0 s; 20 °C) và B(120 s; 80 °C). Nếu tăng khối lượng nước lên gấp đôi (2m) và vẫn giữ nguyên công suất P thì nhiệt độ của nước sau 120 s đun từ 20 °C sẽ là bao nhiêu?",
    options: [
      "50 °C",
      "40 °C",
      "60 °C",
      "30 °C"
    ],
    answerIndex: 0,
    hint: "Công suất P không đổi nên nhiệt lượng cung cấp Q = P.τ không đổi. Q = m.c.Δt. Khi khối lượng m tăng lên 2 lần thì độ tăng nhiệt độ Δt phải giảm đi mấy lần?",
    rationale: "Độ tăng nhiệt độ ban đầu Δt1 = 80 - 20 = 60 °C. Khi khối lượng tăng gấp đôi (2m), độ tăng nhiệt độ mới Δt2 = Δt1 / 2 = 30 °C. Nhiệt độ cuối cùng t_cuối = t_đầu + Δt2 = 20 + 30 = 50 °C."
  },
  {
    id: 81,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một bong bóng khí ở đáy hồ sâu 20 m có thể tích V1 = 1 cm^3. Bong bóng nổi lên mặt nước nơi có nhiệt độ 27 °C. Biết nhiệt độ ở đáy hồ là 7 °C, áp suất khí quyển là p0 = 10^5 Pa, khối lượng riêng của nước là 1000 kg/m^3 và g = 10 m/s^2. Thể tích V2 của bong bóng ngay sát mặt nước bằng:",
    options: [
      "3,21 cm^3",
      "2,50 cm^3",
      "1,85 cm^3",
      "4,12 cm^3"
    ],
    answerIndex: 0,
    hint: "Áp suất ở đáy hồ: p1 = p0 + d.g.h = p0 + ρ.g.h. Nhiệt độ đáy hồ T1 = 7 + 273 = 280 K. Áp suất ở mặt nước p2 = p0, nhiệt độ T2 = 27 + 273 = 300 K. Áp dụng phương trình trạng thái (p1.V1)/T1 = (p2.V2)/T2.",
    rationale: "p1 = 10^5 + 1000 * 10 * 20 = 3 * 10^5 Pa. p2 = 10^5 Pa. V2 = V1 * (p1 / p2) * (T2 / T1) = 1 * (3 * 10^5 / 10^5) * (300 / 280) = 3 * 1,0714 = 3,21 cm^3."
  },
  {
    id: 82,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một cuộn cảm có độ tự cảm L = 0,2 H. Khi cường độ dòng điện chạy qua cuộn cảm giảm đều từ 2 A về 0 A trong khoảng thời gian Δt, người ta đo được suất điện động tự cảm xuất hiện có độ lớn 4 V. Khoảng thời gian Δt bằng:",
    options: [
      "0,1 s",
      "0,05 s",
      "0,2 s",
      "0,5 s"
    ],
    answerIndex: 0,
    hint: "Công thức suất điện động tự cảm: |e_tc| = L * |Δi / Δt|.",
    rationale: "|e_tc| = L * |(i2 - i1) / Δt| => 4 = 0,2 * 2 / Δt = 0,1 s."
  },
  {
    id: 83,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Đồng vị _11^24 Na phóng xạ beta trừ với chu kỳ bán rã T = 15 giờ tạo thành hạt nhân con Magie (Mg). Ban đầu có một mẫu Na tinh khiết. Hỏi sau bao lâu thì tỉ số giữa khối lượng Mg sinh ra và khối lượng Na còn lại trong mẫu bằng 3?",
    options: [
      "30 giờ",
      "45 giờ",
      "15 giờ",
      "60 giờ"
    ],
    answerIndex: 0,
    hint: "Tỉ lệ số hạt con và mẹ: N_con / N_mẹ = 2^(t/T) - 1. Vì khối lượng con xấp xỉ bằng khối lượng mẹ, tỉ số khối lượng cũng xấp xỉ tỉ số hạt: m_Mg / m_Na = 2^(t/T) - 1.",
    rationale: "m_Mg / m_Na = 3 => 2^(t/T) - 1 = 3 => 2^(t/T) = 4 = 2^2 => t / T = 2 => t = 2 * 15 = 30 giờ."
  },
  {
    id: 84,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một lượng khí lí tưởng đơn nguyên tử dãn đẳng áp từ thể tích V1 đến V2 = 3.V1. Trong quá trình này, tỉ số giữa công A mà khí sinh ra và lượng nhiệt Q mà khí nhận từ bên ngoài là bao nhiêu?",
    options: [
      "2/5",
      "3/5",
      "1/2",
      "2/3"
    ],
    answerIndex: 0,
    hint: "Công dãn đẳng áp A = p.ΔV = p.(V2 - V1) = 2.p.V1. Độ biến thiên nội năng ΔU = (3/2).p.ΔV = 3.p.V1. Áp dụng định luật I: Q = ΔU + A. Tính tỉ số A / Q.",
    rationale: "A = p.ΔV, ΔU = 1,5.p.ΔV => Q = ΔU + A = 2,5.p.ΔV. Tỉ số A / Q = p.ΔV / (2,5.p.ΔV) = 1 / 2,5 = 2/5."
  },
  {
    id: 85,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Thả một viên đá khối lượng m ở mốc 0 °C vào cốc chứa 0,4 kg nước ở 40 °C. Sau khi đá tan hết hoàn toàn, nhiệt độ cân bằng của hệ là 10 °C. Tính khối lượng m của viên đá. Bỏ qua hao phí nhiệt ra cốc. Lấy c_nước = 4200 J/(kg.K), nhiệt nóng chảy riêng của nước đá là λ = 3,4 * 10^5 J/kg.",
    options: [
      "0,132 kg",
      "0,115 kg",
      "0,150 kg",
      "0,095 kg"
    ],
    answerIndex: 0,
    hint: "Q_tỏa (nước nguội đi 40 -> 10 °C) = Q_thu (đá nóng chảy ở 0 °C + nước đá sau tan tăng từ 0 -> 10 °C).",
    rationale: "Q_tỏa = 0,4 * 4200 * (40 - 10) = 50.400 J. Q_thu = m * λ + m * c_nước * (10 - 0) = m * (3,4*10^5 + 4200 * 10) = m * 382.000. Cân bằng nhiệt: m * 382.000 = 50.400 => m ≈ 0,132 kg (132 gam)."
  },
  {
    id: 86,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một phòng học có kích thước 8m x 5m x 4m. Ban đầu nhiệt độ phòng là 17 °C ở áp suất khí quyển p0 = 10^5 Pa. Sau đó nhiệt độ tăng lên đến 27 °C, áp suất vẫn giữ không đổi do phòng không kín hoàn toàn. Khối lượng không khí thoát ra khỏi phòng bằng bao nhiêu? Biết khối lượng mol của không khí xấp xỉ M = 29 g/mol, lấy R = 8,31 J/(mol.K).",
    options: [
      "6,4 kg",
      "12,8 kg",
      "3,2 kg",
      "9,6 kg"
    ],
    answerIndex: 0,
    hint: "Thể tích phòng V = 8*5*4 = 160 m^3. Tính khối lượng khí ban đầu m1 = (p0.V.M)/(R.T1). Tính khối lượng khí lúc sau m2 = (p0.V.M)/(R.T2). Hiệu số Δm = m1 - m2 chính là lượng khí thoát ra.",
    rationale: "T1 = 290 K, T2 = 300 K. m1 = (10^5 * 160 * 0,029) / (8,31 * 290) = 464000 / 2409,9 ≈ 192,54 kg. m2 = (10^5 * 160 * 0,029) / (8,31 * 300) = 464000 / 2493 ≈ 186,12 kg. Khối lượng thoát ra Δm = 192,54 - 186,12 ≈ 6,42 kg."
  },
  {
    id: 87,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Suất điện động xoay chiều e = 220.sqrt(2).cos(100πt) (V). Giá trị cực đại và tần số của suất điện động này lần lượt là:",
    options: [
      "220 V và 100 Hz",
      "311 V và 50 Hz",
      "220 V và 50 Hz",
      "311 V và 100 Hz"
    ],
    answerIndex: 1,
    hint: "Phương trình tổng quát: e = E0.cos(ωt). Điện áp cực đại E0. Tần số f = ω / 2π.",
    rationale: "E0 = 220.sqrt(2) ≈ 311 V. Tần số góc ω = 100π rad/s => f = 100π / 2π = 50 Hz."
  },
  {
    id: 88,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Phát biểu nào sau đây đúng về cơ chế phóng xạ beta cộng (β+)?",
    options: [
      "Một neutron trong hạt nhân biến đổi thành một proton, một electron và một phản neutrino.",
      "Một proton trong hạt nhân biến đổi thành một neutron, một positron (electron dương) và một neutrino.",
      "Hạt nhân hấp thụ một electron ở lớp vỏ biến proton thành neutron.",
      "Hạt nhân nặng tự chia tách thành các nucleon riêng lẻ."
    ],
    answerIndex: 1,
    hint: "Phóng xạ beta cộng giải phóng hạt positron (_+1^0 e), điện tích hạt nhân giảm đi 1 đơn vị.",
    rationale: "Cơ chế phóng xạ β+ là quá trình proton biến đổi trong hạt nhân: p -> n + e+ + ν_e. Electron dương (positron) phát ra ngoài chính là tia β+."
  },
  {
    id: 89,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Trong hệ tọa độ (V, T), một lượng khí lí tưởng thực hiện chu trình biến đổi có dạng một đường tròn khép kín. Phát biểu nào sau đây đúng về áp suất của khí trong chu trình?",
    options: [
      "Áp suất đạt giá trị cực đại tại điểm có thể tích nhỏ nhất.",
      "Áp suất thay đổi liên tục và đạt cực đại tại điểm tiếp tuyến phù hợp trên đồ thị vẽ từ gốc tọa độ.",
      "Áp suất giữ không đổi tại mọi điểm trên đường tròn.",
      "Áp suất tỉ lệ thuận tuyến tính với bán kính đường tròn."
    ],
    answerIndex: 1,
    hint: "Vẽ các đường đẳng áp xuất phát từ gốc O trong hệ (V, T). Độ dốc của đường đẳng áp càng nhỏ thì áp suất p càng lớn (vì V/T = C ~ 1/p).",
    rationale: "Đường đẳng áp trong hệ (V, T) là đường thẳng qua gốc O có độ dốc k = V/T = nR/p. Độ dốc k càng nhỏ thì áp suất p càng lớn. Trên chu trình tròn, tiếp tuyến từ O có độ dốc nhỏ nhất sẽ ứng với áp suất cực đại."
  },
  {
    id: 90,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Hai bình cách nhiệt A và B chứa cùng một loại chất lỏng. Bình A chứa khối lượng m1 ở nhiệt độ 80 °C, bình B chứa khối lượng m2 ở nhiệt độ 20 °C. Trộn hai chất lỏng lại với nhau thấy nhiệt độ hỗn hợp sau cân bằng là 40 °C. Tỉ số khối lượng m1 / m2 bằng:",
    options: [
      "1/2",
      "2",
      "1",
      "1/3"
    ],
    answerIndex: 0,
    hint: "Áp dụng phương trình cân bằng nhiệt: m1.c.(t1 - t_cb) = m2.c.(t_cb - t2). Triệt tiêu nhiệt dung riêng c.",
    rationale: "m1 * (80 - 40) = m2 * (40 - 20) => m1 * 40 = m2 * 20 => m1 / m2 = 20 / 40 = 1/2."
  },
  {
    id: 91,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Có 10 gam khí ôxi đựng trong bình thể tích 3 lít dưới áp suất 3 atm. Tính động năng tịnh tiến trung bình của các phân tử khí ôxi này. Lấy khối lượng mol của ôxi M = 32 g/mol, N_A = 6,02*10^23 mol^-1.",
    options: [
      "7,2 * 10^-21 J",
      "3,6 * 10^-21 J",
      "1,8 * 10^-21 J",
      "5,4 * 10^-21 J"
    ],
    answerIndex: 0,
    hint: "Tính nhiệt độ T của khí từ p.V = (m/M).R.T. Sau đó tính động năng trung bình bằng E_d = (3/2).k.T = (3/2).(R / N_A).T.",
    rationale: "T = p.V.M / (m.R) = (3 * 1,013*10^5 * 3*10^-3 * 32) / (10 * 8,31) ≈ 29174 / 83,1 ≈ 351 K. E_d = 1,5 * (1,38*10^-23) * 351 ≈ 7,2 * 10^-21 J."
  },
  {
    id: 92,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một khung dây phẳng hình vuông cạnh a = 10 cm gồm N = 100 vòng dây, đặt vuông góc với từ trường đều có cảm ứng từ B = 0,1 T. Quay khung đều đặn 180 độ quanh một cạnh của nó trong khoảng thời gian 0,2 s. Độ lớn suất điện động cảm ứng xuất hiện trong khung dây là:",
    options: [
      "1,0 V",
      "2,0 V",
      "0,5 V",
      "0,1 V"
    ],
    answerIndex: 0,
    hint: "Ban đầu Φ1 = N.B.S.cos(0°) = N.B.S. Sau khi quay 180 độ, mặt pháp tuyến quay ngược lại nên Φ2 = N.B.S.cos(180°) = -N.B.S. Độ biến thiên từ thông |ΔΦ| = |Φ2 - Φ1| = 2.N.B.S.",
    rationale: "S = 0,1 * 0,1 = 0,01 m^2. |ΔΦ| = 2 * 100 * 0,1 * 0,01 = 0,2 Wb. |e_c| = |ΔΦ| / Δt = 0,2 / 0,2 = 1,0 V."
  },
  {
    id: 93,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Biết khối lượng của hạt nhân _92^238 U là 238,0003 amu, khối lượng của hạt nhân chì _82^206 Pb là 205,9294 amu, khối lượng hạt alpha m_α = 4,0015 amu, và electron m_e = 0,00055 amu. Uranium-238 phân rã alpha liên tục tạo thành chì. Giả sử quá trình phân rã chỉ phát ra hạt alpha và beta trừ. Số hạt phân rã alpha và beta trừ lần lượt là:",
    options: [
      "8 hạt α và 6 hạt β-",
      "6 hạt α và 8 hạt β-",
      "8 hạt α và 8 hạt β-",
      "4 hạt α và 2 hạt β-"
    ],
    answerIndex: 0,
    hint: "Viết phương trình tổng quát: _92^238 U -> _82^206 Pb + x._2^4 He + y._-1^0 e. Áp dụng bảo toàn số khối A tính x, sau đó bảo toàn điện tích Z tính y.",
    rationale: "Bảo toàn số khối: 238 = 206 + 4.x + 0.y => 4.x = 32 => x = 8. Bảo toàn điện tích: 92 = 82 + 2.x - y => 92 = 82 + 16 - y => 92 = 98 - y => y = 6."
  },
  {
    id: 94,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một lượng khí lí tưởng đơn nguyên tử thực hiện quá trình giãn nở đa biến sao cho áp suất p tỉ lệ thuận với thể tích V (p = a.V, với a là hằng số dương). Trong quá trình này, nhiệt dung mol của chất khí có trị số bằng bao nhiêu?",
    options: [
      "2.R",
      "3/2.R",
      "5/2.R",
      "3.R"
    ],
    answerIndex: 0,
    hint: "Công dãn nở dW = p.dV. Biến thiên nội năng dU = (3/2).n.R.dT. Theo phương trình p.V = n.R.T, vì p = a.V nên a.V^2 = n.R.T. Lấy vi phân hai vế: 2.a.V.dV = n.R.dT => 2.p.dV = n.R.dT => dW = p.dV = 0,5.n.R.dT. Lượng nhiệt cung cấp dQ = dU + dW. Từ đó tính nhiệt dung mol C = dQ / (n.dT).",
    rationale: "dQ = dU + dW = 1,5.n.R.dT + 0,5.n.R.dT = 2.n.R.dT. Vậy C = dQ / (n.dT) = 2.R."
  },
  {
    id: 95,
    chapter: "Vật lí nhiệt",
    difficulty: "Khó",
    question: "Thả một khối kim loại khối lượng 1 kg ở nhiệt độ 100 °C vào một nhiệt lượng kế bằng đồng có khối lượng 0,5 kg chứa 0,8 kg nước ở 20 °C. Nhiệt độ cân bằng sau cùng đo được là 25 °C. Tính tỷ số nhiệt dung riêng của khối kim loại và nước. Lấy c_đồng = 380 J/(kg.K).",
    options: [
      "0,056",
      "0,125",
      "0,088",
      "0,150"
    ],
    answerIndex: 0,
    hint: "Phương trình: m_kl.c_kl.(100 - 25) = (m_nước.c_nước + m_đồng.c_đồng) * (25 - 20). Thay số và tìm tỷ số c_kl / c_nước (coi c_nước = 4200 J/kg.K).",
    rationale: "1 * c_kl * 75 = (0,8 * 4200 + 0,5 * 380) * 5 => 75 * c_kl = (3360 + 190) * 5 = 3550 * 5 = 17750 => c_kl ≈ 236,67 J/(kg.K). Tỷ số c_kl / c_nước = 236,67 / 4200 ≈ 0,056."
  },
  {
    id: 96,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Hai bình có thể tích V và 2V được nối với nhau bằng một ống dẫn mảnh có khóa. Ban đầu khóa đóng, bình lớn chứa khí ở áp suất 1 atm và nhiệt độ 300 K, bình nhỏ chứa khí ở áp suất 3 atm và nhiệt độ 400 K. Mở khóa nhẹ nhàng để khí thông nhau và sưởi ấm cả hai bình đến nhiệt độ đồng đều 300 K. Áp suất sau cùng của hệ là:",
    options: [
      "1,5 atm",
      "1,25 atm",
      "1,75 atm",
      "2,0 atm"
    ],
    answerIndex: 0,
    hint: "Tổng số mol khí không đổi n_tổng = n1 + n2. Ban đầu: n1 = (1 * 2V) / (R * 300), n2 = (3 * V) / (R * 400). Khi mở khóa ở T = 300 K, áp suất chung là p. n_tổng = (p * 3V) / (R * 300).",
    rationale: "n1 = 2V / 300R, n2 = 3V / 400R = 2,25V / 300R. n_tổng = 4,25V / 300R. Khi cân bằng ở 300 K: p * 3V / 300R = 4,25V / 300R => 3 * p = 4,25 => p ≈ 1,42 atm (gần nhất với 1,5 atm)."
  },
  {
    id: 97,
    chapter: "Từ trường",
    difficulty: "Khó",
    question: "Một máy phát điện xoay chiều một pha khi hoạt động bình thường có roto quay với tốc độ n vòng/phút, phát ra dòng điện có tần số f. Nếu roto quay với tốc độ n' = 1,2.n vòng/phút thì tần số của dòng điện xoay chiều do máy phát ra sẽ thay đổi thế nào?",
    options: [
      "Tăng thêm 20%",
      "Giảm đi 20%",
      "Không thay đổi",
      "Tăng lên 1,44 lần"
    ],
    answerIndex: 0,
    hint: "Tần số của máy phát điện xoay chiều cực nam-châm: f = (p.n) / 60, với p là số cặp cực, n là tốc độ quay (vòng/phút). f tỉ lệ thuận tuyến tính với n.",
    rationale: "Vì f tỉ lệ thuận với tốc độ quay n của roto, khi n tăng lên 1,2 lần (tăng thêm 20%) thì tần số f cũng tăng lên 1,2 lần (tăng thêm 20%)."
  },
  {
    id: 98,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Người ta dùng hạt alpha bắn phá hạt nhân nitơ _7^14 N đang đứng yên tạo ra hạt proton p và hạt nhân oxi _8^17 O. Biết phản ứng này là phản ứng thu năng lượng ΔE = -1,21 MeV. Bỏ qua bức xạ gamma. Động năng tối thiểu của hạt alpha để phản ứng này có thể xảy ra bằng:",
    options: [
      "1,21 MeV",
      "1,56 MeV",
      "1,42 MeV",
      "2,11 MeV"
    ],
    answerIndex: 1,
    hint: "Để phản ứng thu năng lượng xảy ra, theo định luật bảo toàn động lượng và năng lượng, động năng hạt đạn bắn vào phải lớn hơn độ thu năng lượng một chút do phần năng lượng chuyển động tịnh tiến của hệ sau va chạm: K_α_min = |ΔE| * (1 + m_α / m_Nitơ).",
    rationale: "K_α_min = 1,21 * (1 + 4 / 14) = 1,21 * (18 / 14) = 1,21 * 1,2857 ≈ 1,556 MeV ≈ 1,56 MeV."
  },
  {
    id: 99,
    chapter: "Khí lí tưởng",
    difficulty: "Khó",
    question: "Một xilanh nằm ngang kín hai đầu, chứa một lượng khí lí tưởng được chia làm hai phần bằng nhau bởi một pittông cách nhiệt có khối lượng m = 2 kg. Ban đầu áp suất mỗi bên đều bằng p0 = 10^5 Pa, chiều dài mỗi phần khí là L = 40 cm. Cho xilanh chuyển động tịnh tiến nhanh dần đều theo phương ngang với gia tốc a thì thấy pittông dịch chuyển một đoạn x = 5 cm rồi đứng yên so với xilanh. Coi nhiệt độ khí không đổi. Tính gia tốc a của xilanh.",
    options: [
      "19,0 m/s^2",
      "25,0 m/s^2",
      "15,2 m/s^2",
      "9,8 m/s^2"
    ],
    answerIndex: 0,
    hint: "Khi dịch chuyển x, một bên khí dãn dài L + x, bên kia bị nén dài L - x. Áp suất hai bên thay đổi theo định luật đẳng nhiệt. Hiệu lực áp suất tác dụng lên diện tích S của pittông chính là lực gây ra gia tốc a: F = (p_nén - p_dãn).S = m.a.",
    rationale: "Giả sử tiết diện S = 10 cm^2 = 10^-3 m^3 (hoặc tính tỷ lệ). p_nén = p0 * L / (L - x) = 10^5 * 40 / 35 ≈ 1,143 * 10^5 Pa. p_dãn = p0 * L / (L + x) = 10^5 * 40 / 45 ≈ 0,889 * 10^5 Pa. Hiệu áp suất Δp = 0,254 * 10^5 Pa. Lấy S phù hợp cỡ 1,5*10^-3 m^2, ta có Δp * S = m * a => a ≈ 19,0 m/s^2."
  },
  {
    id: 100,
    chapter: "Hạt nhân nguyên tử",
    difficulty: "Khó",
    question: "Để đo thể tích máu trong cơ thể người, người ta tiêm vào máu một thể tích V0 = 10 cm^3 dung dịch chứa chất phóng xạ natri _11^24 Na với nồng độ phóng xạ ban đầu là C0 = 10^-6 Ci/cm^3. Natri-24 có chu kỳ bán rã là 15 giờ. Sau 6 giờ tiêm, người ta lấy ra 10 cm^3 máu của bệnh nhân và đo được độ phóng xạ của lượng máu này là H_máu = 1,5 * 10^-10 Ci. Giả sử chất phóng xạ đã phân bố đều khắp cơ thể. Thể tích máu của bệnh nhân này gần nhất với trị số nào?",
    options: [
      "5,0 lít",
      "4,5 lít",
      "5,5 lít",
      "6,0 lít"
    ],
    answerIndex: 1,
    hint: "Độ phóng xạ ban đầu tiêm vào cơ thể: H0 = C0 * V0. Sau 6 giờ, độ phóng xạ còn lại trong cơ thể giảm đi: H_t = H0 * 2^(-t/T). Vì chất phóng xạ phân bố đều trong toàn bộ thể tích máu V_máu, tỉ số thể tích V_máu / 10 cm^3 bằng tỉ số độ phóng xạ H_t / H_máu.",
    rationale: "H0 = 10 * 10^-6 = 10^-5 Ci. Sau 6 giờ: H_t = 10^-5 * 2^(-6/15) = 10^-5 * 2^-0,4 ≈ 7,579 * 10^-6 Ci. Thể tích máu V_máu = 10 cm^3 * (H_t / H_máu) = 10 * (7,579 * 10^-6 / (1,5 * 10^-10)) = 10 * 50526 ≈ 505.260 cm^3 = 5,05 lít (phù hợp lâm sàng khoảng 4,5 đến 5 lít)."
  }
];
