

import { Subject, SubjectId } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: SubjectId.TINK_CREATIVE,
    title: "Tink Sáng tạo",
    description: "Bộ môn sáng chế, kết hợp cơ khí và nghệ thuật (STEM).",
    introduction: "Tink Sáng tạo (Creative Tinkering) là bộ môn giáo dục STEM tập trung vào tư duy sáng chế và kỹ năng thực hành (Hands-on). Tại đây, học sinh được khuyến khích 'nghịch ngợm' có mục đích với các vật liệu đa dạng như gỗ, bìa các tông, động cơ DC, đèn LED và các dụng cụ cơ khí. Môn học giúp biến những ý tưởng trừu tượng trong đầu thành các mô hình vật lý có thể chuyển động và hoạt động được.",
    software: "Dụng cụ chế tạo & Vật liệu tái chế",
    videoTutorials: [
        "https://www.youtube.com/embed/5r3X-c2H-Xk", // Example: Cardboard Automata
        "https://www.youtube.com/embed/Rj04m7WkXy8"  // Example: Hydraulic Arm
    ],
    usageGuide: [
      {
        title: "Bước 1: Quan sát & Lên ý tưởng (Ideate)",
        description: "- Quan sát các vấn đề trong cuộc sống hoặc các cơ cấu chuyển động thú vị.\n- Phác thảo ý tưởng ra giấy (Sketching): Vẽ hình dáng sản phẩm, dự kiến các bộ phận chuyển động và vật liệu cần dùng."
      },
      {
        title: "Bước 2: Chuẩn bị vật liệu & Dụng cụ",
        description: "- Vật liệu: Bìa các tông, que kem, nắp chai, dây thun, xiên tre, súng bắn keo, động cơ giảm tốc, pin...\n- Dụng cụ an toàn: Găng tay, kính bảo hộ (nếu cần), kéo, kìm cắt."
      },
      {
        title: "Bước 3: Chế tạo & Lắp ráp (Prototyping)",
        description: "- Gia công chi tiết: Cắt, dán, đục lỗ theo bản vẽ.\n- Lắp ráp cơ khí: Gắn trục, bánh xe, đòn bẩy, hệ thống truyền động (dây đai, bánh răng).\n- Kết nối mạch điện (nếu có): Nối pin với động cơ, công tắc."
      },
      {
        title: "Bước 4: Thử nghiệm & Cải tiến (Test & Refine)",
        description: "- Chạy thử mô hình. Nếu thất bại (kẹt cơ cấu, tuột dây...), hãy tìm nguyên nhân và sửa chữa.\n- Trang trí sản phẩm để tăng tính thẩm mỹ."
      }
    ],
    objectives: [
      "Hiểu nguyên lý hoạt động của các máy đơn giản: Đòn bẩy, Bánh xe & Trục, Ròng rọc.",
      "Rèn luyện kỹ năng sử dụng dụng cụ thủ công và tư duy thiết kế kỹ thuật (Engineering Design Process).",
      "Khuyến khích văn hóa 'Maker': Dám thử nghiệm, chấp nhận thất bại và không ngừng cải tiến."
    ],
    outcomes: [
      "Tự tay chế tạo được các đồ chơi chuyển động (Automata), xe thế năng, cánh tay thủy lực.",
      "Hiểu về kết cấu chịu lực và truyền động cơ khí căn bản.",
      "Nâng cao sự khéo léo của đôi tay và tư duy thẩm mỹ."
    ],
    referenceProblems: [
      {
        title: "Cánh tay Robot thủy lực",
        problemStatement: "Chế tạo một cánh tay robot bằng bìa các tông có thể gắp vật nhẹ, sử dụng nguyên lý thủy lực từ xi lanh tiêm.",
        referenceLecture: "Nguyên lý Pascal & Thủy lực:\n- Nước không chịu nén. Khi đẩy pít-tông ở xi lanh A (tay điều khiển), áp suất truyền qua ống dẫn làm pít-tông ở xi lanh B (trên cánh tay) chuyển động.\n- Kết cấu: Sử dụng các khớp xoay bằng xiên tre hoặc bu lông."
      },
      {
        title: "Hộp múa rối tự động (Automata)",
        problemStatement: "Tạo một hộp múa rối trong đó nhân vật chuyển động lên xuống hoặc xoay tròn khi quay tay quay.",
        referenceLecture: "Cơ cấu Cam & Trục khuỷu:\n- Cam (Mấu): Biến chuyển động quay thành chuyển động tịnh tiến (lên/xuống).\n- Trục khuỷu: Biến chuyển động quay thành chuyển động lắc.\n- Vật liệu: Hộp giày, xiên tre làm trục, nắp chai nhựa làm bánh cam."
      },
      {
        title: "Xe đua phản lực bóng bay",
        problemStatement: "Chế tạo xe đua chạy bằng năng lượng gió từ bóng bay. Yêu cầu xe chạy thẳng và xa nhất có thể.",
        referenceLecture: "Định luật III Newton & Ma sát:\n- Lực đẩy: Không khí phụt ra sau tạo lực đẩy xe về trước.\n- Giảm ma sát: Trục bánh xe phải trơn tru, bánh xe tròn đều.\n- Khí động học: Xe cần nhẹ và cân đối."
      }
    ],
    icon: "🔨",
    imageUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: SubjectId.SCRATCH,
    title: "Scratch",
    description: "Lập trình kéo thả trực quan, sáng tạo câu chuyện và trò chơi.",
    introduction: "Scratch là ngôn ngữ lập trình trực quan lớn nhất thế giới dành cho trẻ em, được phát triển bởi MIT Media Lab. Tại AIG EDUCATION, học sinh không chỉ học viết mã mà còn học cách suy nghĩ sáng tạo, suy luận có hệ thống và làm việc cộng tác.",
    software: "Scratch 3.0 (Nền tảng Web & Offline)",
    softwareUrl: "https://scratch.mit.edu/",
    usageGuide: [
      {
        title: "Bước 1: Truy cập & Thiết lập ngôn ngữ",
        description: "- Truy cập: Vào trang web scratch.mit.edu hoặc mở ứng dụng Scratch Desktop đã cài đặt.\n- Đổi ngôn ngữ: Nhấn vào biểu tượng 'Quả địa cầu' ở góc trên cùng bên trái, chọn 'Tiếng Việt' để dễ dàng thao tác.\n- Tạo dự án mới: Nhấn nút 'Khởi tạo' (Create) để vào giao diện làm việc chính."
      },
      {
        title: "Bước 2: Quản lý Nhân vật (Sprite) & Phông nền",
        description: "- Thêm nhân vật: Di chuột vào biểu tượng 'Đầu mèo' góc dưới bên phải -> Chọn 'Chọn một nhân vật' (kính lúp) để lấy từ thư viện, hoặc 'Tải nhân vật lên' để dùng ảnh cá nhân.\n- Thêm phông nền: Tương tự, chọn biểu tượng 'Bức tranh' bên cạnh để thay đổi bối cảnh sân khấu.\n- Xóa nhân vật: Nhấn vào nhân vật muốn xóa, bấm vào biểu tượng thùng rác nhỏ trên góc icon."
      },
      {
        title: "Bước 3: Ghép khối lệnh (Coding)",
        description: "- Kéo thả: Chọn nhóm lệnh bên trái (ví dụ: Chuyển động - Xanh dương). Giữ chuột trái kéo khối 'Di chuyển 10 bước' sang vùng trắng ở giữa.\n- Ghép nối: Kéo khối lệnh thứ hai đến gần đáy khối thứ nhất cho đến khi thấy bóng mờ màu xám, thả chuột để chúng 'dính' vào nhau (nghe tiếng 'pop').\n- Sự kiện kích hoạt: Luôn bắt đầu bằng khối 'Khi bấm vào lá cờ xanh' (trong nhóm Sự kiện - Vàng) để chương trình có thể chạy."
      },
      {
        title: "Bước 4: Lưu & Chia sẻ dự án",
        description: "- Đặt tên: Gõ tên dự án vào ô trống trên thanh menu (thường mặc định là Untitled).\n- Lưu bài: Chọn Tệp tin (File) -> Lưu ngay (Save now) hoặc Lưu về máy tính (Save to your computer).\n- Chia sẻ: Nhấn nút màu cam 'Chia sẻ' (Share) để công khai dự án cho cộng đồng (yêu cầu tài khoản đã xác thực email)."
      }
    ],
    objectives: [
      "Hiểu các khái niệm lập trình cơ bản: Vòng lặp, Biến, Điều kiện, Sự kiện.",
      "Phát triển tư duy logic và kỹ năng giải quyết vấn đề.",
      "Kích thích trí tưởng tượng thông qua việc kể chuyện kỹ thuật số."
    ],
    outcomes: [
      "Tự lập trình được các trò chơi hoàn chỉnh (Mê cung, Hứng táo, Flappy Bird...).",
      "Sáng tạo các phim hoạt hình ngắn và thiệp điện tử tương tác.",
      "Nền tảng vững chắc để chuyển sang các ngôn ngữ code thuần (Python, C++)."
    ],
    referenceProblems: [
      {
        title: "Mèo di chuyển hình vuông",
        problemStatement: "Làm thế nào để lập trình nhân vật Mèo đi bộ thành một hình vuông có cạnh dài 100 bước?",
        referenceLecture: "Kiến thức: Vòng lặp & Chuyển động.\n- Để đi hình vuông, nhân vật cần lặp lại 4 lần hành động: Đi thẳng và Rẽ vuông góc (90 độ).\n- Khối lệnh cần dùng: 'Lặp lại (4)', 'Di chuyển (100)', 'Xoay phải (90)'."
      },
      {
        title: "Trò chơi Hứng Táo",
        problemStatement: "Hướng dẫn làm game hứng táo: Táo rơi từ trên trời xuống ngẫu nhiên, bát di chuyển bằng chuột để hứng.",
        referenceLecture: "Kiến thức: Tọa độ & Số ngẫu nhiên.\n- Táo rơi: Thay đổi y một lượng âm (ví dụ: y = y - 5) liên tục.\n- Khi chạm đáy (y < -170): Đi tới điểm ngẫu nhiên ở trên cao (y = 180, x = lấy ngẫu nhiên).\n- Bát: Đi tới con trỏ chuột (x)."
      },
      {
        title: "Hỏi xoáy đáp xoay (Biến)",
        problemStatement: "Tạo chương trình hỏi tên người chơi, sau đó Mèo chào 'Xin chào + [Tên]'.",
        referenceLecture: "Kiến thức: Cảm biến & Chuỗi.\n- Dùng khối 'Hỏi [Tên bạn là gì?] và đợi' trong nhóm Cảm biến.\n- Câu trả lời được lưu trong biến hệ thống 'Trả lời'.\n- Dùng khối 'Kết hợp [Xin chào ] và [Trả lời]' trong nhóm Các phép toán để tạo câu chào."
      }
    ],
    icon: "🐱",
    imageUrl: "https://scratch.mit.edu/images/scratch-og.png",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: SubjectId.ROVER,
    title: "Robot Rover",
    description: "Xe robot giáo dục STEM, hỗ trợ lập trình kéo thả và Python.",
    introduction: "Robot Rover là bộ kit xe robot giáo dục được phát triển bởi OhStem, dành cho học sinh từ 8 tuổi trở lên. Rover giúp học sinh tiếp cận kiến thức về robot, lập trình và tư duy logic thông qua việc điều khiển xe di chuyển, tránh vật cản và dò line. Robot tương thích với ngôn ngữ lập trình kéo thả (Blockly) và Python, phù hợp cho cả người mới bắt đầu và nâng cao.",
    software: "OhStem App (Mobile) & OhStem Code (Web)",
    softwareUrl: "https://app.ohstem.vn/",
    usageGuide: [
      {
        title: "Bước 1: Cài đặt ứng dụng",
        description: "- Trên điện thoại/máy tính bảng: Bạn tải ứng dụng 'OhStem App' từ Google Play hoặc App Store.\n- Trên máy tính: Bạn truy cập trang web 'app.ohstem.vn' để sử dụng giao diện lập trình OhStem Code."
      },
      {
        title: "Bước 2: Kết nối Robot",
        description: "- Bật công tắc nguồn trên xe Rover.\n- Mở ứng dụng OhStem, chọn thiết bị (thường là xController hoặc Yolo:Bit tùy phiên bản mạch đi kèm).\n- Nhấn vào biểu tượng Bluetooth để quét và kết nối với Robot Rover."
      },
      {
        title: "Bước 3: Lập trình điều khiển",
        description: "- Chọn giao diện 'Lập trình'.\n- Kéo các khối lệnh từ danh mục 'Di chuyển' (Move) để điều khiển động cơ.\n- Kéo các khối lệnh 'Cảm biến' (Sensor) để đọc dữ liệu từ cảm biến siêu âm hoặc dò line.\n- Ví dụ: Kéo khối 'Đi thẳng với tốc độ 50' và ghép vào khối 'Bắt đầu'."
      },
      {
        title: "Bước 4: Chạy chương trình",
        description: "- Nhấn nút 'Chạy' (nút Play màu xanh) trên ứng dụng để Robot thực thi lệnh ngay lập tức (chế độ Live).\n- Hoặc nhấn nút 'Nạp' (Upload) để lưu chương trình vào bộ nhớ của Robot, cho phép Robot chạy độc lập không cần kết nối."
      }
    ],
    objectives: [
      "Làm quen với tư duy lập trình máy tính (Computational Thinking).",
      "Hiểu nguyên lý hoạt động của các loại cảm biến: Dò đường (Line Tracking), Siêu âm (Ultrasonic).",
      "Phát triển kỹ năng giải quyết vấn đề thông qua các bài toán thực tế của Robot."
    ],
    outcomes: [
      "Lập trình Robot tự động di chuyển theo vạch đen (Line Follower).",
      "Lập trình Robot tự động tránh vật cản thông minh.",
      "Sáng tạo các chế độ điều khiển từ xa (Gamepad) và biểu diễn đèn LED."
    ],
    referenceProblems: [
      {
        title: "Robot đi hình vuông",
        problemStatement: "Lập trình cho Robot Rover di chuyển theo quỹ đạo hình vuông, mỗi cạnh chạy trong 2 giây.",
        referenceLecture: "Kiến thức: Vòng lặp & Thời gian.\n- Robot cần lặp lại 4 lần chuỗi hành động: Đi thẳng (2s) -> Quay phải (khoảng 0.5s - 1s tùy tốc độ để đạt 90 độ).\n- Sử dụng khối 'Lặp lại 4 lần' và các khối 'Chờ (Wait)'."
      },
      {
        title: "Dò line (Đi theo vạch đen)",
        problemStatement: "Sử dụng cảm biến dò đường 4 mắt để giúp Robot bám theo vạch kẻ màu đen trên nền trắng.",
        referenceLecture: "Logic: Cảm biến hồng ngoại.\n- Rover có 4 mắt đọc (S1, S2, S3, S4).\n- Nếu mắt giữa (S2, S3) thấy đen -> Đi thẳng.\n- Nếu mắt trái (S1, S2) thấy đen -> Robot bị lệch phải -> Cần rẽ trái.\n- Nếu mắt phải (S3, S4) thấy đen -> Robot bị lệch trái -> Cần rẽ phải."
      }
    ],
    icon: "🏎️",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: SubjectId.RIO,
    title: "Robot Rio",
    description: "Robot giáo dục mầm non, lập trình không cần màn hình.",
    introduction: "Robot Rio là bộ sản phẩm robot giáo dục dành cho trẻ mầm non (3-7 tuổi) theo hướng tiếp cận Screen-free (Không dùng màn hình). Rio giúp trẻ phát triển tư duy logic, định hướng không gian và giải quyết vấn đề thông qua các nút bấm vật lý trên lưng robot và hệ thống bản đồ, thẻ bài tương tác phong phú, giúp trẻ vừa học vừa chơi một cách tự nhiên.",
    software: "Lập trình nút bấm vật lý (Unplugged)",
    softwareUrl: "https://ohstem.vn",
    usageGuide: [
      {
        title: "Bước 1: Khởi động Robot Rio",
        description: "- Bạn gạt công tắc nguồn dưới bụng Robot.\n- Robot sẽ phát âm thanh và đèn mắt sáng lên, báo hiệu đã sẵn sàng nhận lệnh."
      },
      {
        title: "Bước 2: Làm quen với bàn phím điều khiển",
        description: "- Trên lưng Rio có 7 nút bấm:\n+ Nút Tiến (Mũi tên lên): Đi thẳng 1 ô (10cm).\n+ Nút Lùi (Mũi tên xuống): Đi lùi 1 ô.\n+ Nút Trái/Phải: Xoay tại chỗ 90 độ sang trái/phải.\n+ Nút Giữa (Hình tròn): Thực thi lệnh (Go).\n+ Nút X: Xóa toàn bộ lệnh cũ để lập trình lại.\n+ Nút Loa: Điều chỉnh âm lượng/Ghi âm."
      },
      {
        title: "Bước 3: Lập trình đường đi",
        description: "- Đặt Rio lên điểm xuất phát trên bản đồ.\n- Tư duy đường đi và nhấn các nút mũi tên theo trình tự. (Mỗi lần nhấn nút, đèn trên lưng sẽ nháy báo hiệu nhận lệnh, tối đa 256 bước).\n- Nhấn nút Giữa (Go) để Rio bắt đầu di chuyển."
      },
      {
        title: "Bước 4: Sử dụng tính năng nâng cao",
        description: "- Tương tác với bản đồ: Rio có cảm biến dưới đáy để nhận diện vị trí và phát ra âm thanh tương ứng (tiếng con vật, tiếng nhạc cụ...).\n- Chế độ đi theo vạch (Line Follow): Sử dụng thẻ lệnh hoặc bản đồ line để kích hoạt."
      }
    ],
    objectives: [
      "Phát triển tư duy máy tính (Computational Thinking) không cần thiết bị điện tử.",
      "Rèn luyện tư duy không gian: Phân biệt trái - phải, định hướng đường đi.",
      "Phát triển kỹ năng ngôn ngữ và kể chuyện thông qua các chủ đề bản đồ."
    ],
    outcomes: [
      "Trẻ hiểu quy trình lập trình cơ bản: Input (Nhấn nút) -> Process (Xử lý) -> Output (Di chuyển).",
      "Tự lập kế hoạch để đưa Robot đến đích chính xác trên bản đồ.",
      "Phát triển kỹ năng làm việc nhóm và sự tự tin khi giải quyết vấn đề."
    ],
    referenceProblems: [
      {
        title: "Rio đi tìm kho báu",
        problemStatement: "Trên bản đồ Đảo Hải Tặc, hãy đưa Rio từ Bến Tàu (Start) đến Rương Kho Báu. Đường đi: Thẳng 2 ô, Rẽ Phải, Thẳng 1 ô.",
        referenceLecture: "Chuỗi lệnh:\n1. Nhấn 'Tiến' (x2 lần).\n2. Nhấn 'Phải' (x1 lần).\n3. Nhấn 'Tiến' (x1 lần).\n4. Nhấn nút 'Go' để chạy."
      },
      {
        title: "Rio tránh đá ngầm",
        problemStatement: "Đường đi thẳng bị chặn bởi đá ngầm. Hãy tìm đường vòng để Rio về đích an toàn.",
        referenceLecture: "Tư duy giải quyết vấn đề:\n- Thay vì đi thẳng, ta có thể rẽ sang bên cạnh để đi vòng qua chướng ngại vật.\n- Ví dụ: Rẽ Trái -> Tiến -> Rẽ Phải -> Tiến -> Rẽ Phải -> Tiến -> Rẽ Trái."
      }
    ],
    icon: "📡",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    id: SubjectId.MAKER_EMPIRE,
    title: "Makers Empire",
    description: "Thiết kế 3D đơn giản, biến ý tưởng thành hiện thực.",
    introduction: "Makers Empire là phần mềm thiết kế 3D thân thiện, giúp học sinh tiểu học làm quen với tư duy không gian 3 chiều. Chương trình khuyến khích học sinh quan sát thế giới xung quanh và hiện thực hóa ý tưởng của mình thành các mô hình kỹ thuật số.",
    software: "Makers Empire 3D App",
    softwareUrl: "https://www.makersempire.com/",
    usageGuide: [
       {
        title: "Bước 1: Đăng nhập & Tạo Avatar",
        description: "- Mở ứng dụng Makers Empire trên Tablet hoặc PC.\n- Chọn 'School Login' nếu dùng tài khoản trường, hoặc 'New User' để tạo mới.\n- Tạo Hero (Avatar): Tùy chỉnh nhân vật đại diện của bạn với quần áo, phụ kiện theo ý thích để bắt đầu hành trình."
      },
      {
        title: "Bước 2: Làm quen với Shaper Module",
        description: "- Tại màn hình chính (World), bạn chọn nút 'Create' (biểu tượng bút chì) -> Chọn 'Shaper' (Khối hình cơ bản).\n- Đây là môi trường thiết kế chính. Bạn sẽ thấy một mặt phẳng lưới (Workplane) ở giữa màn hình."
      },
      {
        title: "Bước 3: Thao tác điều khiển Camera",
        description: "- Xoay: Dùng 1 ngón tay (trên iPad) hoặc chuột phải (trên PC) kéo qua lại để xoay góc nhìn 360 độ.\n- Phóng to/Thu nhỏ: Dùng 2 ngón tay chụm/mở hoặc lăn chuột giữa.\n- Di chuyển vùng nhìn: Dùng 2 ngón tay di cùng lúc hoặc giữ chuột giữa (nếu có) để trượt màn hình."
      },
      {
        title: "Bước 4: Thiết kế & Tô màu",
        description: "- Thêm khối: Kéo khối tròn, vuông, tam giác từ thanh menu bên trái vào bàn làm việc.\n- Chỉnh sửa: Chạm vào khối để hiện các mũi tên: Mũi tên thẳng (Di chuyển), Mũi tên cong (Xoay), Các chấm tròn (Thay đổi kích thước).\n- Tô màu: Chọn biểu tượng 'Bảng màu' để đổi màu cho vật thể.\n- Nhấn 'Finish' để lưu vào thư viện cá nhân."
      }
    ],
    objectives: [
      "Làm quen với hệ tọa độ không gian 3 chiều (X, Y, Z).",
      "Phát triển tư duy thiết kế (Design Thinking) từ ý tưởng đến sản phẩm.",
      "Hiểu về các khối hình học cơ bản và cách kết hợp chúng."
    ],
    outcomes: [
      "Thiết kế được nhân vật, nhà cửa, và đồ vật 3D hoàn chỉnh.",
      "Hiểu quy trình in 3D và chuẩn bị file để in.",
      "Sở hữu bộ sưu tập các mô hình 3D do chính mình thiết kế."
    ],
    referenceProblems: [
      {
        title: "Thiết kế Móc khóa tên mình",
        problemStatement: "Hướng dẫn thiết kế một chiếc móc khóa hình chữ nhật có khắc tên nổi để in 3D.",
        referenceLecture: "Kỹ thuật: Ghép khối & Text.\n1. Tạo đế: Dùng khối hộp chữ nhật, dẹt xuống (độ dày khoảng 3mm).\n2. Tạo lỗ: Dùng khối trụ tròn (Hole/Negative) đục một lỗ nhỏ ở góc để xỏ dây.\n3. Thêm chữ: Dùng công cụ Text, nhập tên, đặt lên mặt đế."
      },
      {
        title: "Thiết kế Tên lửa",
        problemStatement: "Làm thế nào để tạo hình một tên lửa đơn giản từ các khối cơ bản?",
        referenceLecture: "Tư duy hình khối:\n- Thân tên lửa: Khối trụ tròn (Cylinder).\n- Đầu tên lửa: Khối chóp nón (Cone).\n- Cánh: Dùng 3 hoặc 4 khối tam giác mỏng (Wedge) gắn xung quanh đuôi.\n- Cửa sổ: Các khối trụ nhỏ gắn vào thân."
      }
    ],
    icon: "🏰",
    imageUrl: "https://images.unsplash.com/photo-1633458942455-83e0c030d36e?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-purple-400 to-pink-500"
  },
  {
    id: SubjectId.TINKERCAD,
    title: "Tinkercad",
    description: "Kết hợp thiết kế 3D CAD, Lập trình khối và Mạch điện tử.",
    introduction: "Tinkercad là một ứng dụng web miễn phí của Autodesk, bao gồm 3 phân hệ chính: 3D Design (Thiết kế 3D), Circuits (Mạch điện tử) và Codeblocks (Lập trình khối). Đây là nền tảng lý tưởng để người mới bắt đầu khám phá STEM, từ việc tạo ra mô hình in 3D đến mô phỏng các hệ thống điện tử thông minh.",
    software: "Autodesk Tinkercad (Web App - tinkercad.com)",
    softwareUrl: "https://www.tinkercad.com/",
    usageGuide: [
       {
        title: "Bước 1: Dashboard (Bảng điều khiển)",
        description: "- Truy cập tinkercad.com và đăng nhập.\n- Tại Dashboard, bạn sẽ thấy danh sách các dự án của mình.\n- Nhấn nút '+ Create' (Tạo mới) màu xanh dương ở góc trên bên phải.\n- Chọn loại dự án: '3D Design' (Thiết kế 3D), 'Circuit' (Mạch điện) hoặc 'Codeblocks'."
      },
      {
        title: "Bước 2: Giao diện Workplane (Mặt phẳng làm việc)",
        description: "- Thư viện (Bên phải): Chứa các khối cơ bản (Basic Shapes) như Box, Cylinder, Sphere...\n- Workplane (Ở giữa): Nơi bạn kéo thả các khối vào để thiết kế.\n- Điều hướng: Nhấn giữ chuột phải để xoay góc nhìn, lăn chuột để phóng to/thu nhỏ, nhấn giữ chuột giữa (hoặc Shift + Chuột phải) để di chuyển vùng nhìn."
      },
      {
        title: "Bước 3: Công cụ cốt lõi (Solid & Hole)",
        description: "- Solid (Khối đặc): Mặc định các khối đều là đặc và có màu sắc.\n- Hole (Khối rỗng): Bất kỳ khối nào cũng có thể chuyển thành 'Hole' (dạng sọc xám) trong bảng Inspector.\n- Group (Ctrl+G): Đây là công cụ mạnh nhất. Chọn khối Đặc + Khối Rỗng rồi nhấn Group để đục lỗ (cắt khối). Chọn nhiều khối Đặc nhấn Group để hàn chúng lại thành một."
      },
      {
        title: "Bước 4: Xuất bản & Mô phỏng",
        description: "- Với 3D Design: Nhấn 'Export' -> Chọn .STL để in 3D hoặc .OBJ.\n- Với Circuits: Nhấn 'Start Simulation' để chạy thử mạch điện ảo (ví dụ xem đèn LED sáng, động cơ quay).\n- Với Codeblocks: Nhấn nút 'Play' để xem code tự động lắp ráp mô hình."
      }
    ],
    objectives: [
      "Thành thạo kỹ năng mô hình hóa 3D (CAD) thông qua các phép toán cộng/trừ khối.",
      "Hiểu và lắp ráp được các mạch điện tử cơ bản và lập trình Arduino mô phỏng.",
      "Phát triển tư duy thuật toán thông qua lập trình Codeblocks."
    ],
    outcomes: [
      "Tự thiết kế và tối ưu hóa file 3D cho máy in 3D.",
      "Xây dựng được hệ thống mạch điện thông minh (IoT) trên môi trường ảo.",
      "Ứng dụng kiến thức STEM tổng hợp để giải quyết vấn đề thực tế."
    ],
    referenceProblems: [
      {
        title: "Thiết kế Cốc uống nước (3D Design)",
        problemStatement: "Sử dụng tính năng Group và Hole để tạo một chiếc cốc có quai cầm.",
        referenceLecture: "Quy trình Group/Hole:\n1. Thân cốc: Tạo khối trụ đặc (Solid).\n2. Lòng cốc: Nhân bản khối trụ (Ctrl+D), thu nhỏ kích thước, chuyển sang chế độ Hole (Rỗng), lồng vào giữa thân cốc.\n3. Cắt: Chọn cả hai -> Group (Ctrl+G).\n4. Quai cốc: Dùng khối Torus (Hình xuyến), cắt đôi hoặc gắn trực tiếp vào thân."
      },
      {
        title: "Mạch đèn giao thông (Circuits)",
        problemStatement: "Lắp ráp và lập trình mạch đèn giao thông dùng Arduino Uno R3 trên Tinkercad Circuits.",
        referenceLecture: "Linh kiện & Code:\n- Kéo Board Arduino Uno và Breadboard Mini.\n- Lắp 3 đèn LED (Đỏ, Vàng, Xanh) nối với điện trở 220 Ohm vào các chân Digital (13, 12, 11).\n- Mở Code Editor -> Chọn Text hoặc Blocks -> Viết lệnh bật/tắt các chân theo thời gian (Delay)."
      }
    ],
    icon: "⚡",
    imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1000",
    gradient: "from-teal-400 to-emerald-600"
  }
];
