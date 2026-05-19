import type {
  TimelineMilestone,
  FiveElement,
  PhilosopherCard,
  ScientificDiscovery,
  LeninPhrase,
  ClassifyItem,
  QuizQuestion,
  Reference,
} from '../types';

// ─── Timeline Milestones (Requirement 3.1) ───────────────────────────────────

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'ancient-china',
    title: 'Triết học Trung Hoa cổ đại',
    period: 'Khoảng 700 – 200 TCN',
    explanation:
      'Thuyết Âm – Dương và Ngũ hành (Kim, Mộc, Thủy, Hỏa, Thổ) coi các lực lượng và yếu tố này là khởi nguyên của mọi sự sinh thành, biến hóa trong vũ trụ. Đây là nỗ lực đầu tiên của người Trung Hoa cổ đại nhằm giải thích thế giới từ chính thế giới vật chất.',
    icon: 'Yin-Yang',
  },
  {
    id: 'ancient-india',
    title: 'Triết học Ấn Độ cổ đại',
    period: 'Khoảng 600 – 200 TCN',
    explanation:
      'Phái Lokàyata cho rằng thế giới được tạo bởi 4 yếu tố: đất, nước, lửa và không khí. Vật chất được gọi là Anu (Nguyên tử) – những hạt nhỏ nhất cấu thành vạn vật. Đây là tư tưởng nguyên tử luận sơ khai của triết học Ấn Độ.',
    icon: 'Atom',
  },
  {
    id: 'ancient-greece',
    title: 'Triết học Hy Lạp cổ đại',
    period: 'Khoảng 600 – 300 TCN',
    explanation:
      'Thalès cho rằng vũ trụ được tạo thành từ Nước. Heraclite coi Lửa là một tiến trình liên tục, không vững chắc. Démocrite đề xuất thuyết Nguyên tử (Atom) – những hạt vật chất đầu tiên có hình dạng tròn, vuông, tam giác. Các nhà duy vật cổ đại đã xuất phát từ chính thế giới vật chất để giải thích thế giới.',
    icon: 'FlaskConical',
  },
  {
    id: 'classical-mechanics',
    title: 'Chủ nghĩa duy vật cơ học cận đại',
    period: 'Thế kỷ XVII – XVIII',
    explanation:
      'Các nhà khoa học đồng nhất vật chất với khối lượng, giải thích sự vận động thuần túy trên nền tảng cơ học và tách rời vật chất khỏi vận động, không gian, thời gian. Đây là phương pháp luận siêu hình, máy móc, chưa thể khái quát hóa triết học về thế giới vật chất.',
    icon: 'Cog',
  },
  {
    id: 'scientific-revolution',
    title: 'Cuộc cách mạng khoa học tự nhiên',
    period: '1895 – 1916',
    explanation:
      'Các phát minh của Röntgen (tia X, 1895), Becquerel (phóng xạ, 1896), Thomson (điện tử, 1897) và Einstein (thuyết tương đối, 1905–1916) đã làm rung chuyển vật lý học cổ điển. Chủ nghĩa duy tâm lợi dụng sự tan rã của nguyên tử để tuyên bố "vật chất tiêu tan".',
    icon: 'Zap',
  },
  {
    id: 'lenin-definition',
    title: 'Định nghĩa Vật chất của V.I. Lênin',
    period: '1908',
    explanation:
      'Trong tác phẩm "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán" (1908), Lênin định nghĩa: "Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác của chúng ta chép lại, chụp lại, phản ánh và tồn tại không lệ thuộc vào cảm giác." Đây là đỉnh cao nhận thức triết học về vật chất.',
    icon: 'BookOpen',
  },
];

// ─── Five Elements / Ngũ Hành (Requirement 4.1) ──────────────────────────────

export const fiveElements: FiveElement[] = [
  {
    id: 'kim',
    name: 'Kim',
    character: '金',
    color: 'text-yellow-300',
    explanation:
      'Kim (金) đại diện cho kim loại, sự cứng rắn và sắc bén. Trong Ngũ hành, Kim tượng trưng cho mùa thu, phương Tây và màu trắng. Kim sinh Thủy (kim loại chảy thành nước) và khắc Mộc (kim loại chặt cây). Kim nhắc nhở chúng ta về sự kiên định và khả năng chuyển hóa trong thế giới vật chất.',
  },
  {
    id: 'moc',
    name: 'Mộc',
    character: '木',
    color: 'text-green-400',
    explanation:
      'Mộc (木) đại diện cho cây cối, sự sinh trưởng và phát triển. Trong Ngũ hành, Mộc tượng trưng cho mùa xuân, phương Đông và màu xanh lá. Mộc sinh Hỏa (gỗ tạo ra lửa) và khắc Thổ (rễ cây phá vỡ đất). Mộc thể hiện sức sống và sự vươn lên không ngừng của vật chất.',
  },
  {
    id: 'thuy',
    name: 'Thủy',
    character: '水',
    color: 'text-blue-400',
    explanation:
      'Thủy (水) đại diện cho nước, sự linh hoạt và thích nghi. Trong Ngũ hành, Thủy tượng trưng cho mùa đông, phương Bắc và màu đen. Thủy sinh Mộc (nước nuôi cây) và khắc Hỏa (nước dập lửa). Thủy là biểu tượng của sự vận động liên tục và khả năng thích nghi của vật chất.',
  },
  {
    id: 'hoa',
    name: 'Hỏa',
    character: '火',
    color: 'text-red-400',
    explanation:
      'Hỏa (火) đại diện cho lửa, sự nhiệt huyết và biến đổi. Trong Ngũ hành, Hỏa tượng trưng cho mùa hè, phương Nam và màu đỏ. Hỏa sinh Thổ (lửa tạo ra tro đất) và khắc Kim (lửa nung chảy kim loại). Hỏa thể hiện năng lượng và sự chuyển hóa mạnh mẽ của vật chất.',
  },
  {
    id: 'tho',
    name: 'Thổ',
    character: '土',
    color: 'text-amber-500',
    explanation:
      'Thổ (土) đại diện cho đất, sự ổn định và nuôi dưỡng. Trong Ngũ hành, Thổ tượng trưng cho trung tâm, cuối các mùa và màu vàng. Thổ sinh Kim (đất chứa kim loại) và khắc Thủy (đất ngăn nước). Thổ là nền tảng vật chất, biểu tượng của sự bền vững và khả năng nuôi dưỡng vạn vật.',
  },
];

// ─── Philosopher Cards (Requirement 4.3 – 4.5) ───────────────────────────────

export const philosopherCards: PhilosopherCard[] = [
  {
    id: 'thales',
    name: 'Thalès',
    element: 'Water',
    explanation:
      'Thalès (khoảng 624–546 TCN) – nhà triết học đầu tiên của phương Tây – tuyên bố: "Vũ trụ được tạo thành bởi một nguyên tố duy nhất là Nước." Ông quan sát thấy nước có thể tồn tại ở ba trạng thái (lỏng, rắn, khí), nuôi dưỡng mọi sinh vật và là nền tảng của sự sống. Tư tưởng này, dù còn giản đơn, đã đặt nền móng cho triết học duy vật: giải thích thế giới từ chính thế giới vật chất, không cần đến thần linh hay lực lượng siêu nhiên.',
  },
  {
    id: 'heraclitus',
    name: 'Heraclite',
    element: 'Fire',
    explanation:
      'Heraclite (khoảng 535–475 TCN) cho rằng: "Lửa không là vật thể mà là một tiến trình, nó không vững chắc mà liên tục." Thế giới như dòng chảy vô tận – "Không ai tắm hai lần trên cùng một dòng sông." Lửa với Heraclite là biểu tượng của sự vận động, biến đổi không ngừng của vật chất. Ông đã nhận ra bản chất động của thực tại, vượt xa quan niệm tĩnh tại của các nhà triết học đương thời.',
  },
];

// ─── Scientific Discoveries (Requirement 5.1) ────────────────────────────────

export const scientificDiscoveries: ScientificDiscovery[] = [
  {
    id: 'xray-1895',
    year: 1895,
    scientist: 'Wilhelm Röntgen',
    discovery: 'Phát hiện tia X',
    philosophicalImpact:
      'Tia X cho thấy vật chất có thể phát ra bức xạ xuyên qua vật thể rắn – điều mà vật lý học cổ điển không thể giải thích. Điều này chứng minh rằng nguyên tử không phải là hạt đặc, bất biến như người ta từng nghĩ, mở đầu cho cuộc khủng hoảng của chủ nghĩa duy vật siêu hình.',
  },
  {
    id: 'radioactivity-1896',
    year: 1896,
    scientist: 'Henri Becquerel',
    discovery: 'Phát hiện hiện tượng phóng xạ',
    philosophicalImpact:
      'Phóng xạ cho thấy nguyên tử có thể tự phân rã và biến đổi thành nguyên tố khác. Điều này phá vỡ quan niệm nguyên tử là hạt vật chất nhỏ nhất, không thể phân chia. Chủ nghĩa duy tâm lợi dụng điều này để tuyên bố "vật chất tiêu tan".',
  },
  {
    id: 'electron-1897',
    year: 1897,
    scientist: 'J.J. Thomson',
    discovery: 'Phát hiện điện tử (electron)',
    philosophicalImpact:
      'Việc phát hiện ra điện tử – hạt nhỏ hơn nguyên tử – chứng minh nguyên tử có cấu trúc bên trong. Điều này hoàn toàn lật đổ quan niệm nguyên tử là hạt không thể phân chia của vật lý học cổ điển, buộc triết học phải xem xét lại khái niệm vật chất.',
  },
  {
    id: 'special-relativity-1905',
    year: 1905,
    scientist: 'Albert Einstein',
    discovery: 'Thuyết tương đối hẹp (E = mc²)',
    philosophicalImpact:
      'Phương trình E = mc² cho thấy khối lượng và năng lượng có thể chuyển hóa lẫn nhau. Điều này phá vỡ quan niệm khối lượng là bất biến – nền tảng của chủ nghĩa duy vật cơ học. Vật chất không còn đồng nhất với khối lượng, mà là một thực tại phong phú hơn nhiều.',
  },
  {
    id: 'general-relativity-1916',
    year: 1916,
    scientist: 'Albert Einstein',
    discovery: 'Thuyết tương đối rộng',
    philosophicalImpact:
      'Thuyết tương đối rộng cho thấy không gian và thời gian bị bẻ cong bởi vật chất và năng lượng. Điều này chứng minh vật chất, không gian và thời gian không tách rời nhau như quan niệm cơ học cổ điển, mà gắn kết chặt chẽ trong một thực tại thống nhất.',
  },
];

// ─── Lenin Phrases (Requirement 7.1 – 7.2) ───────────────────────────────────

export const leninPhrases: LeninPhrase[] = [
  {
    id: 'pham-tru-triet-hoc',
    phrase: 'Phạm trù triết học',
    explanation:
      'Vật chất được định nghĩa là một phạm trù triết học – tức là một khái niệm khái quát nhất, rộng nhất, không thể định nghĩa bằng cách quy về một khái niệm rộng hơn. Đây là sự phân biệt quan trọng: vật chất với tư cách phạm trù triết học khác với các dạng vật chất cụ thể (nước, lửa, nguyên tử...). Phạm trù này bao hàm tất cả mọi thứ tồn tại khách quan trong thực tại.',
    example:
      'Ví dụ: Nước, đá, không khí, điện từ trường, trường hấp dẫn... đều là các dạng biểu hiện cụ thể của vật chất. Nhưng "vật chất" với tư cách phạm trù triết học là cái chung nhất bao hàm tất cả các dạng đó.',
  },
  {
    id: 'thuc-tai-khach-quan',
    phrase: 'Thực tại khách quan',
    explanation:
      'Vật chất tồn tại khách quan – tức là tồn tại bên ngoài và độc lập với ý thức, tư duy, cảm giác của con người. Dù con người có nhận thức được hay không, vật chất vẫn tồn tại. Đây là đặc trưng cơ bản nhất phân biệt vật chất với ý thức, và là nền tảng của chủ nghĩa duy vật biện chứng.',
    example:
      'Ví dụ: Trái Đất tồn tại hàng tỷ năm trước khi con người xuất hiện. Các thiên hà xa xôi tồn tại dù chưa ai quan sát được. Virus tồn tại trước khi kính hiển vi được phát minh.',
  },
  {
    id: 'duoc-dem-lai-trong-cam-giac',
    phrase: 'Được đem lại trong cảm giác',
    explanation:
      'Vật chất tác động lên các giác quan của con người (trực tiếp hoặc gián tiếp qua công cụ) và gây nên cảm giác. Điều này khẳng định khả năng nhận thức của con người: chúng ta có thể biết được thế giới vật chất thông qua cảm giác và tư duy. Đây là câu trả lời của Lênin cho thuyết "không thể biết" (Agnosticism).',
    example:
      'Ví dụ: Chúng ta cảm nhận nhiệt độ qua da, nhìn thấy ánh sáng qua mắt, nghe âm thanh qua tai. Dù không thể trực tiếp "nhìn" electron, chúng ta vẫn biết nó tồn tại qua các thiết bị đo lường.',
  },
  {
    id: 'chep-lai-chup-lai-phan-anh',
    phrase: 'Chép lại, chụp lại, phản ánh',
    explanation:
      'Cảm giác và ý thức của con người là sự phản ánh (chép lại, chụp lại) thực tại khách quan – không phải tạo ra thực tại đó. Điều này khẳng định vật chất là tính thứ nhất (có trước), ý thức là tính thứ hai (có sau, phụ thuộc vào vật chất). Ý thức không thể tạo ra vật chất mà chỉ phản ánh nó.',
    example:
      'Ví dụ: Khi nhìn thấy một quả táo đỏ, não bộ "chụp lại" hình ảnh đó từ ánh sáng phản chiếu. Bức tranh vẽ quả táo là sự phản ánh của thực tại, không phải bản thân quả táo.',
  },
  {
    id: 'ton-tai-khong-le-thuoc-cam-giac',
    phrase: 'Tồn tại không lệ thuộc vào cảm giác',
    explanation:
      'Vật chất tồn tại độc lập, không phụ thuộc vào việc con người có cảm nhận được hay không. Đây là sự bác bỏ trực tiếp chủ nghĩa duy tâm chủ quan (cho rằng sự vật chỉ tồn tại khi được cảm nhận). Thực tại khách quan không biến mất khi ta nhắm mắt hay ngừng suy nghĩ về nó.',
    example:
      'Ví dụ: Mặt Trăng vẫn tồn tại khi không ai nhìn lên bầu trời. Đại dương vẫn có sóng dù không có ai ở đó để nghe. Các hạt hạ nguyên tử vẫn vận động dù không có thiết bị đo lường nào.',
  },
];

// ─── Classify Items (Requirement 8.1) ────────────────────────────────────────

export const classifyItems: ClassifyItem[] = [
  {
    id: 'vat-chat',
    name: 'Vật chất',
    correctCategory: 'philosophical',
    explanation:
      '"Vật chất" theo định nghĩa Lênin là một phạm trù triết học – khái niệm khái quát nhất chỉ thực tại khách quan. Đây không phải là một vật thể cụ thể mà là sự khái quát hóa triết học về tất cả những gì tồn tại khách quan.',
  },
  {
    id: 'thuc-tai-khach-quan',
    name: 'Thực tại khách quan',
    correctCategory: 'philosophical',
    explanation:
      '"Thực tại khách quan" là thuộc tính cơ bản của vật chất – đặc trưng triết học chỉ sự tồn tại độc lập với ý thức. Đây là một phạm trù triết học, không phải một vật thể cụ thể có thể cầm nắm hay quan sát trực tiếp.',
  },
  {
    id: 'nuoc',
    name: 'Nước',
    correctCategory: 'concrete',
    explanation:
      'Nước (H₂O) là một hình thức vật chất cụ thể – một chất lỏng có thể quan sát, đo lường và thí nghiệm được. Nước là biểu hiện cụ thể của vật chất, không phải bản thân phạm trù triết học "vật chất".',
  },
  {
    id: 'lua',
    name: 'Lửa',
    correctCategory: 'concrete',
    explanation:
      'Lửa là một hiện tượng vật lý – phản ứng oxy hóa tỏa nhiệt và ánh sáng. Đây là một hình thức vật chất cụ thể (plasma, năng lượng nhiệt), không phải phạm trù triết học. Heraclite dùng lửa làm biểu tượng nhưng bản thân lửa vẫn là vật chất cụ thể.',
  },
  {
    id: 'nguyen-tu',
    name: 'Nguyên tử',
    correctCategory: 'concrete',
    explanation:
      'Nguyên tử là đơn vị cơ bản của vật chất hóa học – một hình thức vật chất cụ thể có thể nghiên cứu bằng khoa học. Đây là biểu hiện cụ thể của vật chất ở cấp độ vi mô, không phải phạm trù triết học.',
  },
  {
    id: 'trai-dat',
    name: 'Trái Đất',
    correctCategory: 'concrete',
    explanation:
      'Trái Đất là một hành tinh – hình thức vật chất cụ thể ở cấp độ vĩ mô. Đây là một thiên thể có thể quan sát, đo lường và nghiên cứu khoa học. Trái Đất là biểu hiện cụ thể của vật chất trong vũ trụ.',
  },
  {
    id: 'con-nguoi',
    name: 'Con người',
    correctCategory: 'concrete',
    explanation:
      'Con người là một hình thức vật chất đặc biệt – sinh vật có ý thức, sản phẩm của quá trình tiến hóa vật chất. Dù con người có ý thức, bản thân cơ thể và hoạt động của con người vẫn là hình thức vật chất cụ thể.',
  },
  {
    id: 'xa-hoi',
    name: 'Xã hội',
    correctCategory: 'concrete',
    explanation:
      'Xã hội là hình thức vận động cao nhất của vật chất – vật chất xã hội. Các quan hệ xã hội, cơ sở hạ tầng, lực lượng sản xuất đều là biểu hiện cụ thể của vật chất ở cấp độ xã hội. Xã hội không phải phạm trù triết học mà là hình thức tồn tại cụ thể.',
  },
];

// ─── Quiz Questions (Requirement 9.1) ────────────────────────────────────────

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question:
      'Theo V.I. Lênin, vật chất là gì?',
    options: [
      'Là tất cả những gì con người có thể nhìn thấy và chạm vào',
      'Là một phạm trù triết học dùng để chỉ thực tại khách quan được đem lại cho con người trong cảm giác',
      'Là nguyên tử và các hạt hạ nguyên tử cấu thành vũ trụ',
      'Là khối lượng và năng lượng theo phương trình E = mc²',
    ],
    correctIndex: 1,
    explanation:
      'Đây là định nghĩa kinh điển của Lênin trong tác phẩm "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán" (1908). Vật chất là phạm trù triết học – không đồng nhất với bất kỳ dạng vật chất cụ thể nào.',
  },
  {
    id: 'q2',
    question:
      'Nhà triết học Hy Lạp cổ đại nào cho rằng "vũ trụ được tạo thành từ Nước"?',
    options: ['Heraclite', 'Démocrite', 'Thalès', 'Socrates'],
    correctIndex: 2,
    explanation:
      'Thalès (khoảng 624–546 TCN) là người đầu tiên đề xuất rằng nước là nguyên tố cơ bản của vũ trụ. Ông quan sát thấy nước có thể tồn tại ở nhiều trạng thái và là nền tảng của sự sống.',
  },
  {
    id: 'q3',
    question:
      'Phát minh nào năm 1895 đã góp phần làm rung chuyển vật lý học cổ điển?',
    options: [
      'Phát hiện điện tử của Thomson',
      'Phát hiện hiện tượng phóng xạ của Becquerel',
      'Phát hiện tia X của Röntgen',
      'Thuyết tương đối của Einstein',
    ],
    correctIndex: 2,
    explanation:
      'Năm 1895, Wilhelm Röntgen phát hiện tia X – bức xạ có thể xuyên qua vật thể rắn. Đây là phát minh đầu tiên trong chuỗi các khám phá làm lung lay nền tảng của vật lý học cổ điển.',
  },
  {
    id: 'q4',
    question:
      'Đặc trưng cơ bản nhất của vật chất theo định nghĩa Lênin là gì?',
    options: [
      'Có khối lượng và chiếm không gian',
      'Tồn tại khách quan, độc lập với ý thức',
      'Có thể quan sát bằng mắt thường',
      'Được cấu tạo từ nguyên tử',
    ],
    correctIndex: 1,
    explanation:
      'Tính khách quan – tồn tại bên ngoài và độc lập với ý thức – là đặc trưng cơ bản nhất của vật chất theo Lênin. Đây là điều phân biệt vật chất với ý thức và là nền tảng của chủ nghĩa duy vật biện chứng.',
  },
  {
    id: 'q5',
    question:
      'Ngũ hành trong triết học Trung Hoa cổ đại bao gồm những yếu tố nào?',
    options: [
      'Đất, Nước, Lửa, Không khí, Ether',
      'Kim, Mộc, Thủy, Hỏa, Thổ',
      'Âm, Dương, Khí, Lý, Tâm',
      'Nước, Lửa, Đất, Gió, Không gian',
    ],
    correctIndex: 1,
    explanation:
      'Ngũ hành gồm Kim (金), Mộc (木), Thủy (水), Hỏa (火), Thổ (土). Đây là năm yếu tố cơ bản mà triết học Trung Hoa cổ đại cho là cấu thành và chi phối mọi sự biến hóa trong vũ trụ.',
  },
  {
    id: 'q6',
    question:
      'Lênin viết tác phẩm "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán" nhằm mục đích gì?',
    options: [
      'Giải thích thuyết tương đối của Einstein',
      'Bác bỏ thuyết nguyên tử của Démocrite',
      'Bảo vệ chủ nghĩa duy vật trước cuộc tấn công của chủ nghĩa duy tâm lợi dụng khủng hoảng vật lý học',
      'Phê phán triết học cơ học của Newton',
    ],
    correctIndex: 2,
    explanation:
      'Năm 1908, Lênin viết tác phẩm này để phản bác những người duy tâm lợi dụng sự "tan rã" của nguyên tử để tuyên bố "vật chất tiêu tan". Lênin chỉ rõ: cái tiêu tan không phải là vật chất mà là giới hạn hiểu biết cũ về vật chất.',
  },
  {
    id: 'q7',
    question:
      'Heraclite dùng hình ảnh nào để biểu tượng cho sự vận động liên tục của thế giới?',
    options: ['Nước', 'Lửa', 'Gió', 'Đất'],
    correctIndex: 1,
    explanation:
      'Heraclite chọn Lửa vì lửa không bao giờ đứng yên – nó luôn biến đổi, tiêu thụ và tái tạo. Câu nói nổi tiếng của ông: "Không ai tắm hai lần trên cùng một dòng sông" thể hiện quan niệm về sự vận động không ngừng của vật chất.',
  },
  {
    id: 'q8',
    question:
      'Theo định nghĩa Lênin, ý thức có quan hệ như thế nào với vật chất?',
    options: [
      'Ý thức và vật chất tồn tại song song, độc lập nhau',
      'Ý thức có trước, quyết định vật chất',
      'Ý thức là sự phản ánh của vật chất, vật chất có trước',
      'Ý thức và vật chất là một, không thể phân biệt',
    ],
    correctIndex: 2,
    explanation:
      'Lênin khẳng định vật chất là tính thứ nhất (có trước), ý thức là tính thứ hai (có sau). Ý thức chỉ là sự "chép lại, chụp lại, phản ánh" thực tại khách quan – không tạo ra vật chất mà phụ thuộc vào vật chất.',
  },
  {
    id: 'q9',
    question:
      'Phái Lokàyata ở Ấn Độ cổ đại gọi các hạt vật chất nhỏ nhất là gì?',
    options: ['Atom', 'Anu', 'Paramanu', 'Dharma'],
    correctIndex: 1,
    explanation:
      'Phái Lokàyata gọi vật chất là Anu (Nguyên tử) – những hạt nhỏ nhất cấu thành thế giới. Đây là tư tưởng nguyên tử luận sơ khai của triết học Ấn Độ, song song với thuyết nguyên tử của Démocrite ở Hy Lạp.',
  },
  {
    id: 'q10',
    question:
      'Câu nào sau đây ĐÚNG về định nghĩa vật chất của Lênin?',
    options: [
      'Vật chất chỉ bao gồm những thứ có thể nhìn thấy bằng mắt thường',
      'Vật chất tiêu tan khi nguyên tử bị phân rã',
      'Vật chất tồn tại khách quan và có thể được nhận thức qua cảm giác',
      'Vật chất đồng nhất với khối lượng theo vật lý học cổ điển',
    ],
    correctIndex: 2,
    explanation:
      'Định nghĩa Lênin khẳng định hai điều: (1) vật chất tồn tại khách quan – độc lập với ý thức; (2) vật chất có thể được nhận thức – nó tác động lên giác quan và được phản ánh trong ý thức. Đây là sự kết hợp giữa tính khách quan và khả năng nhận thức.',
  },
];

// ─── References (Requirement 10.1) ───────────────────────────────────────────

export const references: Reference[] = [
  {
    id: 'giao-trinh-2021',
    title: 'Giáo trình Triết học Mác-Lênin',
    year: '2021',
    description:
      'Bộ Giáo dục và Đào tạo. Giáo trình Triết học Mác-Lênin (Hệ không chuyên lý luận chính trị). Nhà xuất bản Chính trị quốc gia Sự thật, Hà Nội.',
  },
  {
    id: 'giao-trinh-2010',
    title: 'Giáo trình Triết học Mác-Lênin',
    year: '2010',
    description:
      'Hội đồng Trung ương chỉ đạo biên soạn giáo trình quốc gia. Giáo trình Triết học Mác-Lênin. Nhà xuất bản Chính trị quốc gia, Hà Nội. Tài liệu tham khảo nền tảng cho các nội dung về phạm trù vật chất.',
  },
  {
    id: 'marxists-org',
    title: 'Marxists Internet Archive',
    url: 'https://www.marxists.org',
    description:
      'Kho lưu trữ trực tuyến các tác phẩm của Marx, Engels, Lenin và các nhà tư tưởng Marxist. Bao gồm bản dịch tiếng Anh và nhiều ngôn ngữ của "Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán" (1908) của V.I. Lênin.',
  },
];
