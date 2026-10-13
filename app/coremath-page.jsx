"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Mail,
  Play,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Database,
  Award,
  Languages,
  Star,
  ImageIcon,
  User,
} from "./icons";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const CONTACT_PHONE = "(+84) 968 300 346";
const CONTACT_PHONE_HREF = "tel:+84968300346";
const CONTACT_EMAIL = "coremath.academy.educenter@gmail.com";

const EN_TRANSLATIONS = {
  "Trang chủ": "Home", "Đội ngũ đào tạo": "Our Teachers", "Khoá học": "Courses",
  "Cảm nhận học viên": "Testimonials", "Đăng ký học thử": "Book a Trial Lesson",
  "Đăng ký học thử miễn phí": "Book a Free Trial Lesson", "Đăng ký ngay": "Register Now",
  "Giới thiệu": "About Us", "Blog học tập": "Learning Blog", "Mở menu": "Open menu",
  "Đóng menu": "Close menu", "HỌC 1 KÈM 1": "ONE-ON-ONE LEARNING",
  "Lộ trình Toán riêng cho từng học sinh": "A personalized math plan for every student",
  "Giáo viên đồng hành sát sao, điều chỉnh nội dung theo đúng năng lực và mục tiêu của con.": "Dedicated teachers tailor lessons to each student's ability and goals.",
  "LỚP HỌC NHÓM NHỎ": "SMALL GROUP CLASSES",
  "Luyện phản xạ qua các buổi thảo luận nhóm": "Build confidence through group discussions",
  "Không gian học tương tác giúp học sinh tự tin trình bày cách giải và đặt câu hỏi.": "Interactive lessons help students explain their reasoning and ask questions with confidence.",
  "ÔN THI QUỐC TẾ": "INTERNATIONAL EXAM PREP", "Sẵn sàng cho SAT, SSAT, ISEE": "Get ready for the SAT, SSAT, and ISEE",
  "Hệ thống đề luyện bám sát cấu trúc thi thật, theo dõi tiến độ theo từng tuần.": "Practice with exam-style questions and track progress every week.",
  "BÁO CÁO MINH BẠCH": "CLEAR PROGRESS REPORTS", "Phụ huynh luôn nắm rõ tiến độ học": "Parents always know how learning is progressing",
  "Mỗi buổi học đều có báo cáo chi tiết, dễ theo dõi trên mọi thiết bị.": "Every lesson comes with a detailed report that is easy to view on any device.",
  "Tiếp nhận thông tin": "Initial consultation", "Đánh giá năng lực": "Assess current level", "Xây dựng lộ trình": "Build a learning plan",
  "Báo cáo & theo dõi": "Report and track progress", "Tối ưu tương tác": "Interactive learning",
  "Hỗ trợ sát sao": "Personalized support", "Lưu trữ dữ liệu": "Learning resources saved",
  "Chất lượng đào tạo": "Teaching quality", "Lớp học song ngữ": "Bilingual classes",
  "Nền tảng học thuật vững": "Strong academic foundations", "Kinh nghiệm giảng dạy thực tế": "Practical teaching experience",
  "Sư phạm song ngữ": "Bilingual teaching skills", "Tận tâm": "Dedicated", "Minh bạch": "Transparent",
  "Chuẩn quốc tế": "International standards", "Tiểu học": "Primary", "THCS": "Middle school", "THPT": "High school",
  "Toán nền tảng song ngữ": "Bilingual math foundations", "Toán nâng cao & tư duy logic": "Advanced math and logical thinking",
  "Toán quốc tế & chuẩn bị đại học": "International math and college preparation", "Luyện thi": "Exam preparation",
  "Phát video:": "Play video:", "Xem tất cả": "View all", "Đọc thêm": "Read more", "Tìm hiểu thêm": "Learn more",
  "Họ và tên": "Full name", "Số điện thoại": "Phone number", "Email": "Email", "Lớp hiện tại": "Current grade",
  "Môn học quan tâm": "Subjects of interest", "Mục tiêu học tập": "Learning goals", "Gửi đăng ký": "Submit registration",
  "Họ tên phụ huynh": "Parent's name", "Thông tin liên hệ": "Contact information", "Đăng ký học thử miễn phí ngay hôm nay": "Book your free trial lesson today",
  "CoreMath Academy": "CoreMath Academy", "Toán song ngữ": "Bilingual Math", "Đội ngũ": "Our Team",
  "Quy trình học tập": "Our Learning Process",
  "Lộ trình học tập rõ ràng, đồng hành sát sao": "A clear learning journey with dedicated support",
  "Đội ngũ giáo viên": "Our Teaching Team", "Giáo viên tận tâm, chuyên môn vững": "Dedicated teachers with strong expertise",
  "Khoá học phù hợp với từng giai đoạn": "Courses for every stage", "Chương trình học": "Our Programs",
  "Học sinh nói gì về CoreMath": "What students say about CoreMath", "Câu chuyện thành công": "Success stories",
  "Về CoreMath Academy": "About CoreMath Academy", "Đăng ký tư vấn": "Request a consultation",
  "Mỗi giáo viên đồng hành với học sinh như một người hướng dẫn thực sự, không chỉ dạy hết giờ.": "Our teachers guide students throughout their learning journey, beyond the lesson itself.",
  "Tiến độ học tập được báo cáo rõ ràng, phụ huynh luôn biết con đang ở đâu trên lộ trình.": "Clear progress reports help parents understand exactly where their child is on the learning path.",
  "Nội dung giảng dạy tham chiếu theo các chương trình và kỳ thi chuẩn hoá quốc tế.": "Our curriculum aligns with international programs and standardized exams.",
  "Đội ngũ tuyển sinh trao đổi cùng phụ huynh về học lực hiện tại, chương trình con đang theo học và mục tiêu mong muốn trong thời gian tới.": "Our admissions team discusses your child's current level, curriculum, and goals with you.",
  "Học sinh tham gia một buổi học thử miễn phí để giáo viên đánh giá đúng trình độ, đồng thời làm quen với phong cách giảng dạy.": "Students join a free trial lesson so teachers can assess their level and introduce their teaching approach.",
  "Dựa trên kết quả đánh giá, đội ngũ chuyên môn thiết kế giáo trình và lộ trình học riêng trước khi bước vào chương trình chính thức.": "Based on the assessment, our academic team creates a tailored curriculum and learning plan.",
  "Sau mỗi buổi học, phụ huynh nhận báo cáo chi tiết cùng nhận xét cụ thể để nắm rõ tiến độ và sự tiến bộ của con.": "After every lesson, parents receive a detailed report on progress and next steps.",
  "Lớp học vận hành trên nền tảng trực tuyến hiện đại, tích hợp bảng viết, đồng hồ luyện đề và các công cụ trao đổi ngay trong buổi học.": "Our modern online classroom includes an interactive whiteboard, timed practice, and built-in discussion tools.",
  "Bài tập sau mỗi buổi học được giáo viên chấm và chữa chi tiết; phụ huynh nhận phản hồi rõ ràng về điểm số và học lực.": "Teachers mark and explain homework in detail, with clear feedback for parents on scores and progress.",
  "Toàn bộ hình ảnh, nội dung bảng viết và video buổi học được lưu trong 60 ngày để học sinh xem lại bất cứ lúc nào.": "Lesson images, whiteboard notes, and recordings are saved for 60 days for students to revisit.",
  "Giáo viên được tuyển chọn kỹ lưỡng về kinh nghiệm giảng dạy, nền tảng chuyên môn và kỹ năng sư phạm theo chuẩn quốc tế.": "Teachers are carefully selected for their experience, subject knowledge, and international teaching skills.",
  "Giáo viên có thể giảng dạy hoàn toàn bằng tiếng Anh theo chương trình quốc tế hoặc linh hoạt song ngữ Anh - Việt.": "Teachers can teach fully in English or flexibly in both English and Vietnamese.",
  "Tốt nghiệp các chuyên ngành liên quan tại các trường đại học uy tín trong và ngoài nước.": "Graduated in a relevant field from a respected university in Vietnam or abroad.",
  "Từng giảng dạy tại trường quốc tế, song ngữ hoặc luyện thi các kỳ thi chuẩn hoá quốc tế.": "Experience teaching at international or bilingual schools, or preparing students for standardized exams.",
  "Có khả năng truyền đạt kiến thức rõ ràng bằng cả tiếng Việt lẫn tiếng Anh.": "Able to explain concepts clearly in both Vietnamese and English.",
  "Nỗi sợ Toán thường bắt đầu từ những lỗ hổng kiến thức nhỏ bị bỏ qua. Một vài thay đổi trong cách học có thể giúp con lấy lại sự tự tin.": "Math anxiety often begins with small gaps in understanding. A few changes to the learning approach can help rebuild confidence.",
  "Phụ huynh": "Parents", "Học sinh": "Student", "Đăng ký học thử miễn phí": "Book a free trial lesson",
  "Chọn môn học": "Choose a subject", "Chọn lớp": "Select a grade", "Ghi chú thêm": "Additional notes",
  "Gửi thông tin": "Send details", "Đang gửi...": "Submitting...", "Bài viết mới nhất": "Latest articles",
  "Thành tích học viên": "Student achievements", "Xem chi tiết": "View details", "Quay lại": "Go back",
  "Hệ thống học tập CoreMath": "The CoreMath Learning System", "Cá nhân hoá từng lộ trình học": "A Personalized Learning Path for Every Student",
  "Trải nghiệm học tập tại CoreMath": "The CoreMath Learning Experience", "Video demo lớp học": "Classroom Demo Videos",
  "Thành tích học sinh": "Student Achievements", "Giáo viên được tuyển chọn kỹ lưỡng": "Carefully Selected Teachers",
  "Kiến thức & phương pháp học Toán": "Math Knowledge and Learning Strategies", "Học sinh CoreMath đã làm được gì": "What CoreMath Students Have Achieved",
  "Đội ngũ giáo viên CoreMath": "The CoreMath Teaching Team", "Tiêu chuẩn tuyển chọn giáo viên": "Our Teacher Selection Standards",
  "Các chương trình học tại CoreMath": "CoreMath Programs", "Cảm nhận từ học viên & phụ huynh": "Student and Parent Testimonials",
  "Hình ảnh cảm nhận từ học viên & phụ huynh": "Student and Parent Moments", "Về CoreMath": "About CoreMath",
  "Điều CoreMath luôn giữ vững": "What CoreMath Stands For", "Đăng ký học thử miễn phí": "Book a Free Trial Lesson",
  "QUY TRÌNH": "OUR PROCESS", "MÔ HÌNH": "OUR APPROACH", "LỚP HỌC ONLINE": "ONLINE CLASSROOM",
  "THÀNH TÍCH": "ACHIEVEMENTS", "ĐỘI NGŨ": "OUR TEAM", "BLOG HỌC TẬP": "LEARNING BLOG",
  "GÓC THÀNH TÍCH": "STUDENT ACHIEVEMENTS", "TIÊU CHUẨN": "OUR STANDARDS", "CẢM NHẬN": "TESTIMONIALS",
  "GIỚI THIỆU": "ABOUT US", "ĐĂNG KÝ": "REGISTRATION", "GIÁ TRỊ CỐT LÕI": "OUR CORE VALUES",
  "Ảnh trước": "Previous image", "Ảnh tiếp theo": "Next image", "Bộ môn đăng ký": "Subjects",
  "Điều hướng": "Navigation", "Liên hệ": "Contact", "© 2026 CoreMath. Trang minh hoạ giao diện.": "© 2026 CoreMath. Website interface preview.",
  "Học sinh nhận chứng chỉ hoàn thành khoá SAT Math": "Student receives a certificate for completing the SAT Math course",
  "Buổi tổng kết học kỳ tại lớp Toán song ngữ": "End-of-semester celebration in a bilingual math class",
  "Học sinh đạt giải trong kỳ thi Toán học quốc tế": "Student wins an award in an international math competition",
  "Không khí một buổi luyện đề nhóm": "A group exam-prep session", "Góc học tập tại nhà của một học sinh CoreMath": "A CoreMath student's study space at home",
  "Buổi gặp mặt phụ huynh và giáo viên cuối kỳ": "End-of-term parent–teacher meeting",
  "Buổi học 1-kèm-1 cùng giáo viên": "One-on-one lesson with a teacher", "Lớp học nhóm luyện đề SAT": "SAT group practice class",
  "Giờ chữa bài tập về nhà": "Homework review session",
  "Tiểu học": "Primary school", "THCS": "Middle school", "THPT": "High school",
  "Luyện thi": "Exam preparation", "Xây dựng tư duy số học và làm quen thuật ngữ Toán bằng tiếng Anh ngay từ những năm đầu.": "Build number sense and learn English math vocabulary from the early years.",
  "Củng cố kiến thức chương trình chính khoá, phát triển kỹ năng giải quyết vấn đề.": "Strengthen school curriculum knowledge and develop problem-solving skills.",
  "Bám sát chương trình quốc tế, xây dựng nền tảng vững chắc cho các kỳ thi chuẩn hoá.": "Follow international curricula and build a strong foundation for standardized exams.",
  "Luyện đề theo cấu trúc thi thật, tập trung vào tốc độ làm bài và độ chính xác.": "Practice with real exam formats, focusing on speed and accuracy.",
  "Chị Minh Anh": "Minh Anh", "Bạn Gia Bảo": "Gia Bao", "Anh Đức Thịnh": "Duc Thinh", "Phụ huynh học sinh lớp 8": "Parent of an 8th-grade student",
  "Học sinh lớp 11": "11th-grade student", "Phụ huynh học sinh lớp 5": "Parent of a 5th-grade student",
  "5 cách giúp con bớt sợ môn Toán": "5 Ways to Help Your Child Feel Less Afraid of Math",
  "Chuẩn bị Toán cho kỳ thi SSAT, ISEE từ đâu?": "How to Start Preparing for SSAT and ISEE Math",
  "Toán song ngữ: nên bắt đầu từ lớp mấy?": "Bilingual Math: What Grade Should Students Start?",
  "Học sinh CoreMath đạt SAT Math 800/800 sau 6 tháng": "CoreMath Student Scores 800/800 on SAT Math After 6 Months",
  "Từ mất gốc đến top lớp chuyên Toán song ngữ": "From Learning Gaps to the Top of a Bilingual Math Class",
  "Blog học tập CoreMath": "The CoreMath Learning Blog", "Quay lại Blog học tập": "Back to the Learning Blog",
  "Thầy Thành Bình": "Thanh Binh", "Cô Phương Thảo": "Phuong Thao", "Cô Hương Nguyễn": "Huong Nguyen", "Thầy Tuấn Anh": "Tuan Anh",
  "Thạc sĩ Giáo dục (STEM) - Đại học Monash, Úc": "Master of Education (STEM) - Monash University, Australia",
  "2 năm giảng dạy Toán chương trình quốc tế": "2 years teaching international math curricula",
  "Cử nhân danh dự - Đại học Wilfrid Laurier, Canada": "Honours Bachelor's degree - Wilfrid Laurier University, Canada",
  "Học bổng President's Gold Scholarship": "President's Gold Scholarship",
  "Thạc sĩ Thống kê Toán - Colorado State University, Hoa Kỳ": "Master's in Mathematical Statistics - Colorado State University, USA",
  "Tốt nghiệp loại Giỏi - Sư phạm Toán & Vật lý, ĐH Sư phạm Hà Nội": "Graduated with distinction in Math and Physics Education, Hanoi National University of Education",
  "4 năm giảng dạy tại các trường quốc tế và song ngữ": "4 years teaching at international and bilingual schools",
  "Con mình tự tin hẳn lên sau vài tháng học, không còn sợ giờ Toán như trước.": "My child became much more confident after a few months and no longer dreads math class.",
  "Cách giáo viên chữa bài rất chi tiết, mình hiểu được lỗi sai của bản thân thay vì chỉ chép đáp án.": "The teacher explains solutions in detail, so I understand my mistakes instead of just copying answers.",
  "Báo cáo sau mỗi buổi học giúp mình theo sát được tiến độ của con dù công việc khá bận.": "The report after every lesson helps me follow my child's progress, even when work gets busy.",
  "Trải nghiệm một buổi học thật cùng giáo viên CoreMath, đánh giá năng lực miễn phí và nhận đề xuất lộ trình phù hợp với con.": "Experience a real lesson with a CoreMath teacher, get a free assessment, and receive a learning plan tailored to your child.",
  "Điền thông tin bên dưới, đội ngũ CoreMath sẽ liên hệ lại trong thời gian sớm nhất để sắp xếp buổi học thử phù hợp với con.": "Fill in the details below and the CoreMath team will contact you soon to arrange a trial lesson for your child.",
  "Họ và tên phụ huynh / học sinh": "Parent's / student's full name", "Số điện thoại hoặc link facebook liên hệ": "Phone number or Facebook contact link",
  "Khối lớp của con": "Child's grade", "Chọn khối lớp": "Select a grade", "Tên trường học sinh theo học": "School name",
  "Nhu cầu học tập": "Learning needs", "Khung giờ học mong muốn": "Preferred lesson time", "Múi giờ": "Time zone",
  "Chọn múi giờ": "Select a time zone", "Bang / Tỉnh - Thành phố": "State / Province - City", "Quốc gia": "Country",
  "Nguyễn Văn A": "Full name", "VD: Hoa Kỳ": "e.g. United States", "VD: 19:00 - 21:00, thứ 2 - 4 - 6": "e.g. 7:00–9:00 PM, Mon - Wed - Fri",
  "VD: California": "e.g. California", "Phát video:": "Play video:",
  "Giáo viên được tuyển chọn qua nhiều vòng đánh giá về chuyên môn, kinh nghiệm giảng dạy và khả năng sư phạm song ngữ.": "Teachers are selected through multiple rounds assessing subject expertise, teaching experience, and bilingual teaching skills.",
  "Từ nền tảng đến luyện thi quốc tế, mỗi chương trình được thiết kế theo từng giai đoạn phát triển của học sinh.": "From foundational learning to international exam preparation, each program is designed for the student's stage of development.",
  "Những chia sẻ thực tế về hành trình học tập cùng CoreMath.": "Real stories from students and families learning with CoreMath.",
  "Hệ thống học tập cá nhân hoá dành cho học sinh chương trình quốc tế và song ngữ.": "Personalized learning for students in international and bilingual programs.",
  "Kiến thức, phương pháp và kinh nghiệm học Toán được đội ngũ CoreMath tổng hợp và chia sẻ.": "Math knowledge, learning strategies, and practical advice from the CoreMath team.",
  "Hệ thống học tập cá nhân hoá dành cho học sinh chương trình quốc tế và song ngữ, bao phủ đa dạng bộ môn từ Toán, Khoa học, Hoá học, Vật lý, Sinh học đến Reading - Writing, luôn bám sát đúng năng lực và mục tiêu riêng của từng em.": "Personalized learning for students in international and bilingual programs, across Math, Science, Chemistry, Physics, Biology, and Reading - Writing, tailored to each student's ability and goals.",
  "CoreMath được xây dựng với mong muốn giúp học sinh Việt Nam tiếp cận việc học một cách tự tin hơn, đặc biệt là các em đang theo học chương trình quốc tế hoặc song ngữ.": "CoreMath was created to help Vietnamese students approach learning with confidence, especially those in international or bilingual programs.",
  "Thay vì dạy theo một giáo trình cố định cho tất cả, đội ngũ CoreMath xây dựng lộ trình học riêng cho từng học sinh dựa trên năng lực thực tế và mục tiêu cụ thể của các em, đồng thời theo sát tiến độ trong suốt quá trình học.": "Rather than using one fixed curriculum for everyone, the CoreMath team creates an individual learning path based on each student's abilities and goals, and follows their progress throughout.",
};

function localizePage(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const original = node.__viText ?? node.nodeValue;
    if (node.__viText === undefined) node.__viText = original;
    const leading = original.match(/^\s*/)?.[0] ?? "";
    const trailing = original.match(/\s*$/)?.[0] ?? "";
    const text = original.trim();
    const translated = leading + (language === "en" ? (EN_TRANSLATIONS[text] ?? text) : text) + trailing;
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }
  root.querySelectorAll("[aria-label], [title], [alt], input[placeholder], textarea[placeholder]").forEach((element) => {
    for (const attribute of ["aria-label", "title", "alt", "placeholder"]) {
      if (!element.hasAttribute(attribute)) continue;
      const originalAttribute = `data-vi-${attribute}`;
      const original = element.getAttribute(originalAttribute) ?? element.getAttribute(attribute);
      element.setAttribute(originalAttribute, original);
      const label = original.replace(/^Phát video: /, "");
      const translated = original.startsWith("Đến slide ")
        ? `Go to slide ${original.slice("Đến slide ".length)}`
        : EN_TRANSLATIONS[label]
          ? `Play video: ${EN_TRANSLATIONS[label]}`
          : EN_TRANSLATIONS[original] ?? original;
      element.setAttribute(attribute, language === "en" ? translated : original);
    }
  });
}

const NAV_LINKS = [
  { label: "Trang chủ", key: "home" },
  { label: "Đội ngũ đào tạo", key: "doi-ngu-dao-tao" },
  { label: "Khoá học", key: "khoa-hoc" },
  { label: "Cảm nhận học viên", key: "cam-nhan-hoc-vien" },
];

const SLIDES = [
  {
    tag: "HỌC 1 KÈM 1",
    title: "Lộ trình Toán riêng cho từng học sinh",
    text: "Giáo viên đồng hành sát sao, điều chỉnh nội dung theo đúng năng lực và mục tiêu của con.",
    symbol: "π",
  },
  {
    tag: "LỚP HỌC NHÓM NHỎ",
    title: "Luyện phản xạ qua các buổi thảo luận nhóm",
    text: "Không gian học tương tác giúp học sinh tự tin trình bày cách giải và đặt câu hỏi.",
    symbol: "√x",
  },
  {
    tag: "ÔN THI QUỐC TẾ",
    title: "Sẵn sàng cho SAT, SSAT, ISEE",
    text: "Hệ thống đề luyện bám sát cấu trúc thi thật, theo dõi tiến độ theo từng tuần.",
    symbol: "Σ",
  },
  {
    tag: "BÁO CÁO MINH BẠCH",
    title: "Phụ huynh luôn nắm rõ tiến độ học",
    text: "Mỗi buổi học đều có báo cáo chi tiết, dễ theo dõi trên mọi thiết bị.",
    symbol: "★",
  },
];

const STEPS = [
  {
    n: "B1",
    title: "Tiếp nhận thông tin",
    desc: "Đội ngũ tuyển sinh trao đổi cùng phụ huynh về học lực hiện tại, chương trình con đang theo học và mục tiêu mong muốn trong thời gian tới.",
  },
  {
    n: "B2",
    title: "Đánh giá năng lực",
    desc: "Học sinh tham gia một buổi học thử miễn phí để giáo viên đánh giá đúng trình độ, đồng thời làm quen với phong cách giảng dạy.",
  },
  {
    n: "B3",
    title: "Xây dựng lộ trình",
    desc: "Dựa trên kết quả đánh giá, đội ngũ chuyên môn thiết kế giáo trình và lộ trình học riêng trước khi bước vào chương trình chính thức.",
  },
  {
    n: "B4",
    title: "Báo cáo & theo dõi",
    desc: "Sau mỗi buổi học, phụ huynh nhận báo cáo chi tiết cùng nhận xét cụ thể để nắm rõ tiến độ và sự tiến bộ của con.",
  },
];

const FEATURES = [
  {
    icon: Sparkles,
    title: "Tối ưu tương tác",
    desc: "Lớp học vận hành trên nền tảng trực tuyến hiện đại, tích hợp bảng viết, đồng hồ luyện đề và các công cụ trao đổi ngay trong buổi học.",
  },
  {
    icon: ShieldCheck,
    title: "Hỗ trợ sát sao",
    desc: "Bài tập sau mỗi buổi học được giáo viên chấm và chữa chi tiết; phụ huynh nhận phản hồi rõ ràng về điểm số và học lực.",
  },
  {
    icon: Database,
    title: "Lưu trữ dữ liệu",
    desc: "Toàn bộ hình ảnh, nội dung bảng viết và video buổi học được lưu trong 60 ngày để học sinh xem lại bất cứ lúc nào.",
  },
  {
    icon: Award,
    title: "Chất lượng đào tạo",
    desc: "Giáo viên được tuyển chọn kỹ lưỡng về kinh nghiệm giảng dạy, nền tảng chuyên môn và kỹ năng sư phạm theo chuẩn quốc tế.",
  },
  {
    icon: Languages,
    title: "Lớp học song ngữ",
    desc: "Giáo viên có thể giảng dạy hoàn toàn bằng tiếng Anh theo chương trình quốc tế hoặc linh hoạt song ngữ Anh - Việt.",
  },
];

const TEACHER_STANDARDS = [
  {
    icon: Award,
    title: "Nền tảng học thuật vững",
    desc: "Tốt nghiệp các chuyên ngành liên quan tại các trường đại học uy tín trong và ngoài nước.",
  },
  {
    icon: ShieldCheck,
    title: "Kinh nghiệm giảng dạy thực tế",
    desc: "Từng giảng dạy tại trường quốc tế, song ngữ hoặc luyện thi các kỳ thi chuẩn hoá quốc tế.",
  },
  {
    icon: Languages,
    title: "Sư phạm song ngữ",
    desc: "Có khả năng truyền đạt kiến thức rõ ràng bằng cả tiếng Việt lẫn tiếng Anh.",
  },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Tận tâm",
    desc: "Mỗi giáo viên đồng hành với học sinh như một người hướng dẫn thực sự, không chỉ dạy hết giờ.",
  },
  {
    icon: CheckCircle2,
    title: "Minh bạch",
    desc: "Tiến độ học tập được báo cáo rõ ràng, phụ huynh luôn biết con đang ở đâu trên lộ trình.",
  },
  {
    icon: Award,
    title: "Chuẩn quốc tế",
    desc: "Nội dung giảng dạy tham chiếu theo các chương trình và kỳ thi chuẩn hoá quốc tế.",
  },
];

const DEMO_VIDEOS = [
  "Buổi học 1-kèm-1 cùng giáo viên",
  "Lớp học nhóm luyện đề SAT",
  "Giờ chữa bài tập về nhà",
];

const ACHIEVEMENT_PHOTOS = [
  { caption: "Học sinh nhận chứng chỉ hoàn thành khoá SAT Math", tall: true },
  { caption: "Buổi tổng kết học kỳ tại lớp Toán song ngữ" },
  { caption: "Học sinh đạt giải trong kỳ thi Toán học quốc tế" },
  { caption: "Không khí một buổi luyện đề nhóm" },
  { caption: "Góc học tập tại nhà của một học sinh CoreMath" },
  { caption: "Buổi gặp mặt phụ huynh và giáo viên cuối kỳ", tall: true },
];

const TEACHERS = [
  {
    name: "Thầy Thành Bình",
    tag: "MATH TEACHER",
    credentials: [
      "Thạc sĩ Giáo dục (STEM) - Đại học Monash, Úc",
      "2 năm giảng dạy Toán chương trình quốc tế",
    ],
  },
  {
    name: "Cô Phương Thảo",
    tag: "MATH TEACHER",
    credentials: [
      "Cử nhân danh dự - Đại học Wilfrid Laurier, Canada",
      "IELTS 8.0",
      "Học bổng President's Gold Scholarship",
    ],
  },
  {
    name: "Cô Hương Nguyễn",
    tag: "MATH TEACHER",
    credentials: [
      "Thạc sĩ Thống kê Toán - Colorado State University, Hoa Kỳ",
      "SAT Math 800/800 · GRE Quantitative 168/170",
    ],
  },
  {
    name: "Thầy Tuấn Anh",
    tag: "MATH & SCIENCE",
    credentials: [
      "Tốt nghiệp loại Giỏi - Sư phạm Toán & Vật lý, ĐH Sư phạm Hà Nội",
      "4 năm giảng dạy tại các trường quốc tế và song ngữ",
    ],
  },
];

const COURSES = [
  {
    level: "Tiểu học",
    title: "Toán nền tảng song ngữ",
    desc: "Xây dựng tư duy số học và làm quen thuật ngữ Toán bằng tiếng Anh ngay từ những năm đầu.",
  },
  {
    level: "THCS",
    title: "Toán nâng cao & tư duy logic",
    desc: "Củng cố kiến thức chương trình chính khoá, phát triển kỹ năng giải quyết vấn đề.",
  },
  {
    level: "THPT",
    title: "Toán quốc tế & chuẩn bị đại học",
    desc: "Bám sát chương trình quốc tế, xây dựng nền tảng vững chắc cho các kỳ thi chuẩn hoá.",
  },
  {
    level: "Luyện thi",
    title: "SAT / SSAT / ISEE Math",
    desc: "Luyện đề theo cấu trúc thi thật, tập trung vào tốc độ làm bài và độ chính xác.",
  },
];

const TESTIMONIALS = [
  {
    name: "Chị Minh Anh",
    role: "Phụ huynh học sinh lớp 8",
    quote: "Con mình tự tin hẳn lên sau vài tháng học, không còn sợ giờ Toán như trước.",
  },
  {
    name: "Bạn Gia Bảo",
    role: "Học sinh lớp 11",
    quote: "Cách giáo viên chữa bài rất chi tiết, mình hiểu được lỗi sai của bản thân thay vì chỉ chép đáp án.",
  },
  {
    name: "Anh Đức Thịnh",
    role: "Phụ huynh học sinh lớp 5",
    quote: "Báo cáo sau mỗi buổi học giúp mình theo sát được tiến độ của con dù công việc khá bận.",
  },
];

const BLOG_POSTS = [
  {
    slug: "5-cach-giup-con-bot-so-mon-toan",
    tag: "Blog học tập",
    date: "01.2026",
    title: "5 cách giúp con bớt sợ môn Toán",
    excerpt:
      "Nỗi sợ Toán thường bắt đầu từ những lỗ hổng kiến thức nhỏ bị bỏ qua. Một vài thay đổi trong cách học có thể giúp con lấy lại sự tự tin.",
    body: [
      "Rất nhiều học sinh không thực sự \"kém\" Toán, mà chỉ đang mang theo nỗi sợ tích tụ từ những lần bị điểm thấp hoặc bị so sánh với bạn bè. Nỗi sợ này khiến các em né tránh môn học thay vì đối diện với nó.",
      "Điều đầu tiên phụ huynh có thể làm là tìm ra chính xác lỗ hổng kiến thức đang khiến con gặp khó khăn, thay vì chỉ nhìn vào điểm số. Một buổi đánh giá năng lực chi tiết thường cho thấy vấn đề nằm ở một vài chủ đề cụ thể, không phải toàn bộ môn học.",
      "Bên cạnh đó, việc chia nhỏ mục tiêu học tập theo từng tuần, thay vì đặt áp lực phải giỏi ngay lập tức, giúp học sinh có những chiến thắng nhỏ để dần lấy lại sự tự tin.",
      "Cuối cùng, một giáo viên đồng hành kiên nhẫn, sẵn sàng giải thích lại nhiều lần mà không tạo áp lực, thường là yếu tố tạo ra khác biệt lớn nhất trong hành trình vượt qua nỗi sợ Toán của học sinh.",
    ],
  },
  {
    slug: "chuan-bi-toan-cho-ky-thi-ssat-isee",
    tag: "Blog học tập",
    date: "12.2025",
    title: "Chuẩn bị Toán cho kỳ thi SSAT, ISEE từ đâu?",
    excerpt:
      "Không cần học trước quá nhiều, điều quan trọng là nắm chắc nền tảng và luyện đúng dạng bài theo cấu trúc đề thi thực tế.",
    body: [
      "SSAT và ISEE là hai kỳ thi chuẩn hoá phổ biến khi học sinh muốn ứng tuyển vào các trường tư thục hoặc chương trình quốc tế. Phần Toán trong hai kỳ thi này không đòi hỏi kiến thức quá xa chương trình học, nhưng lại yêu cầu tốc độ và khả năng đọc hiểu đề bằng tiếng Anh tốt.",
      "Bước đầu tiên nên làm là xác định rõ cấu trúc đề thi của từng kỳ thi, vì SSAT và ISEE có dạng câu hỏi và thời gian làm bài khác nhau đôi chút.",
      "Sau khi nắm cấu trúc, việc luyện các dạng bài lặp lại nhiều lần trong đề thi thật sẽ hiệu quả hơn là học tràn lan nhiều chủ đề cùng lúc. Ưu tiên những dạng bài xuất hiện thường xuyên sẽ giúp học sinh tối ưu thời gian ôn luyện.",
      "Cuối cùng, làm quen với áp lực thời gian thông qua các bài luyện đề có bấm giờ là bước không thể bỏ qua, vì nhiều học sinh mất điểm không phải do không biết làm mà do không đủ thời gian.",
    ],
  },
  {
    slug: "toan-song-ngu-nen-bat-dau-tu-lop-may",
    tag: "Blog học tập",
    date: "11.2025",
    title: "Toán song ngữ: nên bắt đầu từ lớp mấy?",
    excerpt:
      "Tiếp cận thuật ngữ Toán bằng tiếng Anh càng sớm càng giúp học sinh tự tin hơn khi bước vào chương trình quốc tế.",
    body: [
      "Nhiều phụ huynh băn khoăn không biết nên cho con học Toán bằng tiếng Anh từ giai đoạn nào là hợp lý, vì lo ngại con chưa vững tiếng Việt đã phải học thêm ngôn ngữ mới trong một môn học vốn đã khó.",
      "Trên thực tế, việc làm quen với thuật ngữ Toán học bằng tiếng Anh từ bậc tiểu học, ở mức độ vừa phải, thường không gây áp lực nếu được lồng ghép tự nhiên thay vì dạy song song hai giáo trình riêng biệt.",
      "Với học sinh THCS trở lên, đặc biệt là các em đang hướng tới chương trình quốc tế hoặc các kỳ thi như SAT, việc chuyển sang học Toán hoàn toàn bằng tiếng Anh sẽ hiệu quả hơn nếu nền tảng thuật ngữ đã được xây dựng từ trước.",
      "Nhìn chung, thời điểm phù hợp nhất phụ thuộc vào mục tiêu dài hạn của gia đình hơn là một mốc lớp học cố định.",
    ],
  },
];

const ACHIEVEMENT_POSTS = [
  {
    slug: "hoc-sinh-dat-sat-math-800",
    tag: "Góc thành tích",
    date: "01.2026",
    title: "Học sinh CoreMath đạt SAT Math 800/800 sau 6 tháng",
    excerpt:
      "Từ mức điểm nền 650, hành trình cải thiện của một học sinh lớp 10 cho thấy lộ trình cá nhân hoá tạo ra khác biệt như thế nào.",
    body: [
      "Khi bắt đầu, học sinh này có điểm số nền khoảng 650 trong các bài kiểm tra thử SAT Math, với một số lỗ hổng ở phần đại số và hình học nâng cao.",
      "Lộ trình học được xây dựng theo hai giai đoạn: giai đoạn đầu tập trung củng cố các chủ đề còn yếu, giai đoạn sau chuyển sang luyện đề có bấm giờ để làm quen với áp lực phòng thi thật.",
      "Sau khoảng 6 tháng học đều đặn, kết hợp báo cáo tiến độ hàng tuần giữa giáo viên và phụ huynh, học sinh đã đạt điểm tuyệt đối 800/800 ở phần Toán trong kỳ thi SAT chính thức.",
    ],
  },
  {
    slug: "tu-mat-goc-den-top-lop-toan-song-ngu",
    tag: "Góc thành tích",
    date: "12.2025",
    title: "Từ mất gốc đến top lớp chuyên Toán song ngữ",
    excerpt:
      "Câu chuyện của một học sinh từng mất gốc Toán, sau một năm đồng hành cùng CoreMath đã tự tin đứng trong top đầu lớp.",
    body: [
      "Học sinh này từng có tâm lý né tránh môn Toán rõ rệt, thường xuyên bỏ qua bài tập về nhà và có kết quả kiểm tra không ổn định.",
      "Trong những tuần đầu, giáo viên tập trung xây dựng lại nền tảng cơ bản trước khi tăng độ khó, đồng thời giữ liên lạc thường xuyên với phụ huynh để đảm bảo học sinh không bị áp lực dồn nén.",
      "Sau khoảng một năm đồng hành, học sinh không chỉ theo kịp chương trình mà còn nằm trong nhóm dẫn đầu của lớp chuyên Toán song ngữ tại trường.",
    ],
  },
];

const ALL_POSTS = [...BLOG_POSTS, ...ACHIEVEMENT_POSTS];

const SUBJECTS = [
  { id: "math", label: "Math (Toán)" },
  { id: "science", label: "Science (Khoa học)" },
  { id: "reading-writing", label: "Reading - Writing" },
  { id: "chemistry", label: "Chemistry (Hoá học)" },
  { id: "physics", label: "Physics (Vật lý)" },
  { id: "biology", label: "Biology (Sinh học)" },
];

const GRADES = Array.from({ length: 12 }, (_, i) => "Grade " + (i + 1));

const TIMEZONES = [
  "UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00",
  "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30", "UTC-03:00",
  "UTC-02:00", "UTC-01:00", "UTC+00:00", "UTC+01:00", "UTC+02:00", "UTC+03:00",
  "UTC+03:30", "UTC+04:00", "UTC+04:30", "UTC+05:00", "UTC+05:30", "UTC+05:45",
  "UTC+06:00", "UTC+06:30", "UTC+07:00", "UTC+08:00", "UTC+08:45", "UTC+09:00",
  "UTC+09:30", "UTC+10:00", "UTC+10:30", "UTC+11:00", "UTC+12:00", "UTC+12:45",
  "UTC+13:00", "UTC+14:00",
];

/* ------------------------------------------------------------------ */
/* Small shared components                                             */
/* ------------------------------------------------------------------ */

function initials(name) {
  const clean = name.replace(/^Thầy |^Cô /, "").trim();
  const parts = clean.split(" ");
  return parts.slice(-2).map((p) => p[0]).join("").toUpperCase();
}

function SectionHeading({ eyebrow, title, center, light }) {
  return (
    <div
      className={
        "cm-heading" +
        (center ? " cm-heading-center" : "") +
        (light ? " cm-heading-light" : "")
      }
    >
      <span className="cm-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function PageIntro({ eyebrow, title, desc }) {
  return (
    <section className="cm-page-intro">
      <div className="cm-container">
        <span className="cm-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}

function IconCardGrid({ items }) {
  return (
    <div className="cm-features-grid">
      {items.map((f) => {
        const Icon = f.icon;
        return (
          <div className="cm-feature-card cm-corner-lg" key={f.title}>
            <span className="cm-feature-icon">
              <Icon size={22} />
            </span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function VideoPlaceholder({ label, tone = "navy" }) {
  return (
    <div className={"cm-video cm-video-" + tone + " cm-corner-lg"}>
      <div className="cm-video-grid" aria-hidden="true" />
      <button
        className="cm-play-btn"
        aria-label={"Phát video: " + label}
        type="button"
      >
        <Play size={20} fill="currentColor" />
      </button>
      <span className="cm-video-label">{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                               */
/* ------------------------------------------------------------------ */

function Header({ open, setOpen, activePage, onNavigate, language, onLanguageChange }) {
  return (
    <header className="cm-header">
      <div className="cm-topbar">
        <div className="cm-container cm-topbar-inner">
          <div className="cm-topbar-contact">
            <a href={CONTACT_PHONE_HREF}>
              <Phone size={13} /> {CONTACT_PHONE}
            </a>
            <a href={"mailto:" + CONTACT_EMAIL}>
              <Mail size={13} /> {CONTACT_EMAIL}
            </a>
          </div>
          <nav className="cm-topbar-links">
            <button type="button" onClick={() => onNavigate("gioi-thieu")}>
              Giới thiệu
            </button>
            <button type="button" onClick={() => onNavigate("blog")}>
              Blog học tập
            </button>
          </nav>
        </div>
      </div>

      <div className="cm-mainbar">
        <div className="cm-container cm-mainbar-inner">
          <a
            href="#"
            className="cm-logo"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
          >
            Core<span>Math</span>
          </a>

          <nav className="cm-nav-desktop">
            {NAV_LINKS.map((l) => (
              <button
                key={l.key}
                type="button"
                className={
                  "cm-nav-link" + (activePage === l.key ? " cm-nav-link-active" : "")
                }
                onClick={() => onNavigate(l.key)}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="cm-mainbar-actions">
            <label className="cm-language-picker">
              <Languages size={16} aria-hidden="true" />
              <span className="cm-sr-only">Language</span>
              <select value={language} onChange={(event) => onLanguageChange(event.target.value)} aria-label="Language">
                <option value="vi">🇻🇳 Tiếng Việt</option>
                <option value="en">🇬🇧 English</option>
              </select>
            </label>
            <button
              type="button"
              className="cm-btn cm-btn-blue cm-corner-sm"
              onClick={() => onNavigate("dang-ky")}
            >
              Đăng ký học thử
            </button>
            <button
              className="cm-menu-btn"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Đóng menu" : "Mở menu"}
              aria-expanded={open}
              type="button"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="cm-nav-mobile">
          {NAV_LINKS.map((l) => (
            <button
              key={l.key}
              type="button"
              className={
                "cm-nav-link" + (activePage === l.key ? " cm-nav-link-active" : "")
              }
              onClick={() => onNavigate(l.key)}
            >
              {l.label}
            </button>
          ))}
          <button
            type="button"
            className="cm-btn cm-btn-blue cm-corner-sm"
            onClick={() => onNavigate("dang-ky")}
          >
            Đăng ký học thử
          </button>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero carousel                                                       */
/* ------------------------------------------------------------------ */

function HeroCarousel({ onNavigate }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (next) => setIndex((next + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="cm-carousel-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cm-carousel cm-corner-lg">
        <div
          className="cm-carousel-track"
          style={{ transform: "translateX(-" + index * 100 + "%)" }}
        >
          {SLIDES.map((s, i) => (
            <div className={"cm-slide cm-slide-bg-" + (i % 4)} key={s.title}>
              <div className="cm-slide-grid" aria-hidden="true" />
              <span className="cm-slide-symbol" aria-hidden="true">
                {s.symbol}
              </span>
              <div className="cm-slide-content">
                <span className="cm-eyebrow">{s.tag}</span>
                {i === 0 ? <h1>{s.title}</h1> : <h2>{s.title}</h2>}
                <p>{s.text}</p>
                <button
                  type="button"
                  className="cm-btn cm-btn-blue cm-corner-sm"
                  onClick={() => onNavigate("dang-ky")}
                >
                  Đăng ký học thử miễn phí <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="cm-carousel-arrow cm-carousel-arrow-prev"
          onClick={() => go(index - 1)}
          aria-label="Ảnh trước"
          type="button"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="cm-carousel-arrow cm-carousel-arrow-next"
          onClick={() => go(index + 1)}
          aria-label="Ảnh tiếp theo"
          type="button"
        >
          <ChevronRight size={20} />
        </button>

        <div className="cm-carousel-dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.title}
              className={
                "cm-carousel-dot" + (i === index ? " cm-carousel-dot-active" : "")
              }
              onClick={() => go(i)}
              aria-label={"Đến slide " + (i + 1)}
              aria-current={i === index}
              type="button"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero({ onNavigate }) {
  return (
    <section className="cm-hero">
      <div className="cm-container">
        <HeroCarousel onNavigate={onNavigate} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Process / Personalize / Features                                    */
/* ------------------------------------------------------------------ */

function ProcessSection() {
  return (
    <section className="cm-section cm-process">
      <div className="cm-container">
        <SectionHeading eyebrow="QUY TRÌNH" title="Hệ thống học tập CoreMath" center />
        <div className="cm-steps">
          {STEPS.map((s) => (
            <div className="cm-step" key={s.n}>
              <span className="cm-step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonalizationSection() {
  return (
    <section className="cm-section cm-personalize">
      <div className="cm-container cm-personalize-inner">
        <div className="cm-personalize-copy">
          <SectionHeading eyebrow="MÔ HÌNH" title="Cá nhân hoá từng lộ trình học" light />
          <p>
            Không có hai học sinh nào giống nhau, vì vậy CoreMath không áp dụng một
            khung chương trình chung cho tất cả. Mỗi em được xây dựng lộ trình riêng
            ngay từ đầu, dựa trên năng lực thực tế và mục tiêu cụ thể.
          </p>
          <p>
            Trong suốt quá trình học, giáo viên quan sát sát sao từng buổi, linh hoạt
            điều chỉnh nội dung và phương pháp để kiến thức được tiếp thu một cách
            tự nhiên nhất, thay vì học thuộc máy móc.
          </p>
          <p>
            Dù mục tiêu là cải thiện điểm số trên lớp hay ôn luyện cho các kỳ thi quốc
            tế như SAT, SSAT, ISEE, CoreMath luôn đồng hành cùng một lộ trình rõ ràng
            và có thể theo dõi được.
          </p>
        </div>
        <VideoPlaceholder label="Giới thiệu mô hình học cá nhân hoá" tone="navy" />
      </div>
    </section>
  );
}

function FeaturesSection({ onNavigate }) {
  return (
    <section className="cm-section cm-features">
      <div className="cm-container">
        <SectionHeading eyebrow="LỚP HỌC ONLINE" title="Trải nghiệm học tập tại CoreMath" center />
        <IconCardGrid items={FEATURES} />
        <div className="cm-features-cta">
          <button
            type="button"
            className="cm-btn cm-btn-navy cm-corner-sm"
            onClick={() => onNavigate("dang-ky")}
          >
            Đăng ký học thử miễn phí
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Demo video + achievement photo gallery                              */
/* ------------------------------------------------------------------ */

function DemoVideoSection() {
  return (
    <section className="cm-section cm-gallery-dark">
      <div className="cm-container">
        <SectionHeading eyebrow="VIDEO DEMO" title="Video demo lớp học" center light />
        <div className="cm-gallery-grid">
          {DEMO_VIDEOS.map((label) => (
            <VideoPlaceholder key={label} label={label} tone="blue" />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementGallerySection() {
  return (
    <section className="cm-section cm-photo-gallery">
      <div className="cm-container">
        <SectionHeading eyebrow="THÀNH TÍCH" title="Thành tích học sinh" center />
        <div className="cm-photo-grid">
          {ACHIEVEMENT_PHOTOS.map((p, i) => (
            <figure
              className={
                "cm-photo-tile cm-corner-lg" +
                (p.tall ? " cm-photo-tile-tall" : "") +
                " cm-photo-tone-" +
                (i % 3)
              }
              key={p.caption}
            >
              <ImageIcon size={20} className="cm-photo-icon" aria-hidden="true" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Teachers                                                             */
/* ------------------------------------------------------------------ */

function TeacherSection() {
  return (
    <section className="cm-section cm-teachers">
      <div className="cm-container">
        <SectionHeading eyebrow="ĐỘI NGŨ" title="Giáo viên được tuyển chọn kỹ lưỡng" center />
        <div className="cm-teachers-grid">
          {TEACHERS.map((t, i) => (
            <article className="cm-teacher-card cm-corner-lg" key={t.name}>
              <div className={"cm-teacher-photo cm-teacher-photo-" + (i % 3)}>
                <User size={34} />
              </div>
              <div className="cm-teacher-body">
                <span className="cm-teacher-avatar-mini">{initials(t.name)}</span>
                <h3>{t.name}</h3>
                <span className="cm-teacher-tag">{t.tag}</span>
                <ul>
                  {t.credentials.map((c) => (
                    <li key={c}>
                      <CheckCircle2 size={14} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Blog cards + sections                                               */
/* ------------------------------------------------------------------ */

function BlogCard({ post, dark, onOpen }) {
  const title = post.title;
  const excerpt = post.excerpt;
  const cover = post.media?.find((item) => item.contentType?.startsWith("image/"));
  return (
    <article className={"cm-blog-card cm-corner-lg" + (dark ? " cm-blog-card-dark" : "")}>
      <div className="cm-blog-thumb">
        {cover && <Image src={cover.url} alt={cover.altText || title} width={640} height={400} unoptimized loading="lazy" />}
      </div>
      <div className="cm-blog-body">
        <div className="cm-blog-meta">
          <span>{post.tag}</span>
          <span>{post.date}</span>
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <button type="button" className="cm-blog-link" onClick={() => onOpen(post.slug)}>
          Đọc tiếp <ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}

function BlogSection({ onNavigate, onOpenPost, posts = BLOG_POSTS }) {
  return (
    <section id="blog" className="cm-section cm-blog">
      <div className="cm-container">
        <div className="cm-section-top">
          <SectionHeading eyebrow="BLOG HỌC TẬP" title="Kiến thức & phương pháp học Toán" />
          <button type="button" className="cm-see-all" onClick={() => onNavigate("blog")}>
            Xem tất cả <ArrowRight size={16} />
          </button>
        </div>
        <div className="cm-blog-grid">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} onOpen={onOpenPost} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementBlogSection({ onNavigate, onOpenPost }) {
  return (
    <section className="cm-section cm-achievements">
      <div className="cm-container">
        <div className="cm-section-top">
          <SectionHeading eyebrow="GÓC THÀNH TÍCH" title="Học sinh CoreMath đã làm được gì" light />
          <button
            type="button"
            className="cm-see-all cm-see-all-light"
            onClick={() => onNavigate("cam-nhan-hoc-vien")}
          >
            Xem tất cả <ArrowRight size={16} />
          </button>
        </div>
        <div className="cm-achievements-grid">
          {ACHIEVEMENT_POSTS.map((p) => (
            <BlogCard key={p.slug} post={p} dark onOpen={onOpenPost} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Registration page                                                   */
/* ------------------------------------------------------------------ */

function SubjectPicker({ selected, onToggle }) {
  return (
    <div className="cm-subject-group cm-form-full">
      <span className="cm-form-label">Bộ môn đăng ký</span>
      <div className="cm-subject-chips">
        {SUBJECTS.map((s) => (
          <button
            type="button"
            key={s.id}
            className={
              "cm-chip cm-corner-sm" + (selected.includes(s.id) ? " cm-chip-active" : "")
            }
            onClick={() => onToggle(s.id)}
            aria-pressed={selected.includes(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function RegistrationPage() {
  const [subjects, setSubjects] = useState([]);

  const toggleSubject = (id) => {
    setSubjects((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <>
      <PageIntro
        eyebrow="ĐĂNG KÝ"
        title="Đăng ký học thử miễn phí"
        desc="Trải nghiệm một buổi học thật cùng giáo viên CoreMath, đánh giá năng lực miễn phí và nhận đề xuất lộ trình phù hợp với con."
      />
      <section className="cm-section cm-registration">
        <div className="cm-container cm-registration-inner">
          <div className="cm-registration-side">
            <p>
              Điền thông tin bên dưới, đội ngũ CoreMath sẽ liên hệ lại trong thời
              gian sớm nhất để sắp xếp buổi học thử phù hợp với con.
            </p>
            <div className="cm-final-contact">
              <span>
                <Phone size={16} /> {CONTACT_PHONE}
              </span>
              <span>
                <Mail size={16} /> {CONTACT_EMAIL}
              </span>
            </div>
          </div>

          <form className="cm-form cm-corner-lg" onSubmit={(e) => e.preventDefault()}>
            <div className="cm-form-grid">
              <label className="cm-form-full">
                Họ và tên phụ huynh / học sinh
                <input type="text" placeholder="Nguyễn Văn A" />
              </label>

              <label>
                Số điện thoại hoặc link facebook liên hệ
                <input type="text" placeholder="09xx xxx xxx hoặc facebook.com/..." />
              </label>
              <label>
                Khối lớp của con
                <select defaultValue="">
                  <option value="" disabled>
                    Chọn khối lớp
                  </option>
                  {GRADES.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </label>

              <label className="cm-form-full">
                Tên trường học sinh theo học
                <input type="text" placeholder="VD: ABC International School" />
              </label>

              <SubjectPicker selected={subjects} onToggle={toggleSubject} />

              <label className="cm-form-full">
                Nhu cầu học tập
                <textarea
                  rows={2}
                  placeholder="Ví dụ: AP PreCalculus - Algebra - Geometry - AP Chemistry"
                />
              </label>

              <label>
                Khung giờ học mong muốn
                <input type="text" placeholder="VD: 19:00 - 21:00, thứ 2 - 4 - 6" />
              </label>
              <label>
                Múi giờ
                <select defaultValue="">
                  <option value="" disabled>
                    Chọn múi giờ
                  </option>
                  {TIMEZONES.map((tz) => (
                    <option key={tz}>{tz}</option>
                  ))}
                </select>
              </label>

              <label>
                Bang / Tỉnh - Thành phố
                <input type="text" placeholder="VD: California" />
              </label>
              <label>
                Quốc gia
                <input type="text" placeholder="VD: Hoa Kỳ" />
              </label>

              <button
                type="submit"
                className="cm-btn cm-btn-blue cm-btn-lg cm-corner-sm cm-form-full"
              >
                Đăng ký ngay <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Blog listing + post detail pages                                    */
/* ------------------------------------------------------------------ */

function BlogPage({ onOpenPost, posts = BLOG_POSTS }) {
  return (
    <>
      <PageIntro
        eyebrow="BLOG HỌC TẬP"
        title="Blog học tập CoreMath"
        desc="Kiến thức, phương pháp và kinh nghiệm học Toán được đội ngũ CoreMath tổng hợp và chia sẻ."
      />
      <section className="cm-section cm-blog-page">
        <div className="cm-container">
          <div className="cm-blog-grid">
            {posts.map((p) => (
              <BlogCard key={p.slug} post={p} onOpen={onOpenPost} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PostDetailPage({ slug, onNavigate, posts = ALL_POSTS }) {
  const post = posts.find((p) => p.slug === slug) || BLOG_POSTS[0];
  const content = post.content;
  const paragraphs = Array.isArray(post.body)
    ? post.body
    : (content || "").split(/\n\s*\n/).filter(Boolean);
  const title = post.title;
  const media = post.media || [];
  return (
    <>
      <PageIntro eyebrow={post.tag || "Blog học tập"} title={title} desc={post.date} />
      <section className="cm-section cm-post">
        <div className="cm-container cm-post-inner">
          <button
            type="button"
            className="cm-see-all cm-post-back"
            onClick={() => onNavigate("blog")}
          >
            <ArrowLeft size={16} /> Quay lại Blog học tập
          </button>
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {media.map((item) => item.contentType?.startsWith("video/") ? (
            <video key={item.id} src={item.url} controls preload="metadata" className="cm-post-media" />
          ) : (
            <Image key={item.id} src={item.url} alt={item.altText || title} width={1200} height={900} unoptimized loading="lazy" className="cm-post-media" />
          ))}
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer({ onNavigate }) {
  return (
    <footer className="cm-footer">
      <div className="cm-container cm-footer-grid">
        <div>
          <a
            href="#"
            className="cm-logo cm-logo-light"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
          >
            Core<span>Math</span>
          </a>
          <p>
            Hệ thống học tập cá nhân hoá dành cho học sinh chương trình quốc tế và
            song ngữ, bao phủ đa dạng bộ môn từ Toán, Khoa học, Hoá học, Vật lý, Sinh
            học đến Reading - Writing, luôn bám sát đúng năng lực và mục tiêu riêng
            của từng em.
          </p>
        </div>
        <div>
          <h4>Điều hướng</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.key}>
                <button type="button" onClick={() => onNavigate(l.key)}>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Liên hệ</h4>
          <ul>
            <li>
              <Phone size={14} /> <span>{CONTACT_PHONE}</span>
            </li>
            <li>
              <Mail size={14} /> <span>{CONTACT_EMAIL}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="cm-footer-bottom">
        <span>© 2026 CoreMath. Trang minh hoạ giao diện.</span>
      </div>
    </footer>
  );
}

function FloatingCTA({ onNavigate }) {
  return (
    <button type="button" className="cm-floating-cta" onClick={() => onNavigate("dang-ky")}>
      <Star size={16} fill="currentColor" /> Đăng ký học thử
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Dedicated pages                                                      */
/* ------------------------------------------------------------------ */

function HomePage({ onNavigate, onOpenPost, blogPosts }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ProcessSection />
      <PersonalizationSection />
      <FeaturesSection onNavigate={onNavigate} />
      <DemoVideoSection />
      <AchievementGallerySection />
      <TeacherSection />
      <BlogSection onNavigate={onNavigate} onOpenPost={onOpenPost} posts={blogPosts} />
      <AchievementBlogSection onNavigate={onNavigate} onOpenPost={onOpenPost} />
    </>
  );
}

function TeachersPage() {
  return (
    <>
      <PageIntro
        eyebrow="ĐỘI NGŨ"
        title="Đội ngũ giáo viên CoreMath"
        desc="Giáo viên được tuyển chọn qua nhiều vòng đánh giá về chuyên môn, kinh nghiệm giảng dạy và khả năng sư phạm song ngữ."
      />
      <TeacherSection />
      <section className="cm-section cm-standards">
        <div className="cm-container">
          <SectionHeading eyebrow="TIÊU CHUẨN" title="Tiêu chuẩn tuyển chọn giáo viên" center />
          <IconCardGrid items={TEACHER_STANDARDS} />
        </div>
      </section>
    </>
  );
}

function CoursesPage({ onNavigate }) {
  return (
    <>
      <PageIntro
        eyebrow="KHOÁ HỌC"
        title="Các chương trình học tại CoreMath"
        desc="Từ nền tảng đến luyện thi quốc tế, mỗi chương trình được thiết kế theo từng giai đoạn phát triển của học sinh."
      />
      <section className="cm-section cm-courses">
        <div className="cm-container">
          <div className="cm-courses-grid">
            {COURSES.map((c) => (
              <article className="cm-course-card cm-corner-lg" key={c.title}>
                <span className="cm-course-level">{c.level}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <button
                  type="button"
                  className="cm-blog-link"
                  onClick={() => onNavigate("dang-ky")}
                >
                  Tìm hiểu thêm <ArrowRight size={14} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <FeaturesSection onNavigate={onNavigate} />
    </>
  );
}

function TestimonialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="CẢM NHẬN"
        title="Cảm nhận từ học viên & phụ huynh"
        desc="Những chia sẻ thực tế về hành trình học tập cùng CoreMath."
      />
      <section className="cm-section cm-testimonials">
        <div className="cm-container">
          <SectionHeading eyebrow="GALLERY" title="Hình ảnh cảm nhận từ học viên & phụ huynh" center />
          <div className="cm-testimonial-photo-grid">
            {TESTIMONIALS.map((t, i) => (
              <figure
                className={"cm-photo-tile cm-corner-lg cm-photo-tone-" + (i % 3)}
                key={t.name}
              >
                <ImageIcon size={20} className="cm-photo-icon" aria-hidden="true" />
                <figcaption>
                  <span className="cm-testimonial-quote">{t.quote}</span>
                  <span className="cm-testimonial-author">
                    {t.name} · {t.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <AchievementGallerySection />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="GIỚI THIỆU"
        title="Về CoreMath"
        desc="Hệ thống học tập cá nhân hoá dành cho học sinh chương trình quốc tế và song ngữ."
      />
      <section className="cm-section cm-about">
        <div className="cm-container cm-about-inner">
          <p>
            CoreMath được xây dựng với mong muốn giúp học sinh Việt Nam tiếp cận việc
            học một cách tự tin hơn, đặc biệt là các em đang theo học chương trình
            quốc tế hoặc song ngữ.
          </p>
          <p>
            Thay vì dạy theo một giáo trình cố định cho tất cả, đội ngũ CoreMath xây
            dựng lộ trình học riêng cho từng học sinh dựa trên năng lực thực tế và
            mục tiêu cụ thể của các em, đồng thời theo sát tiến độ trong suốt quá
            trình học.
          </p>
        </div>
      </section>
      <section className="cm-section cm-values">
        <div className="cm-container">
          <SectionHeading eyebrow="GIÁ TRỊ CỐT LÕI" title="Điều CoreMath luôn giữ vững" center />
          <IconCardGrid items={CORE_VALUES} />
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                  */
/* ------------------------------------------------------------------ */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [activeSlug, setActiveSlug] = useState(null);
  const [language, setLanguage] = useState("vi");
  const [adminBlogPosts, setAdminBlogPosts] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/api/blog", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Blog service is unavailable");
        return response.json();
      })
      .then(({ posts = [] }) => {
        if (!active || !Array.isArray(posts)) return;
        for (const post of posts) {
          if (post.title && post.titleEn) EN_TRANSLATIONS[post.title] = post.titleEn;
          if (post.excerpt && post.excerptEn) EN_TRANSLATIONS[post.excerpt] = post.excerptEn;
          if (post.content && post.contentEn) {
            const viParagraphs = post.content.split(/\n\s*\n/).filter(Boolean);
            const enParagraphs = post.contentEn.split(/\n\s*\n/).filter(Boolean);
            viParagraphs.forEach((paragraph, index) => {
              if (enParagraphs[index]) EN_TRANSLATIONS[paragraph] = enParagraphs[index];
            });
          }
        }
        setAdminBlogPosts(posts);
      })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("coremath-language");
    if (savedLanguage === "en" || savedLanguage === "vi") {
      queueMicrotask(() => setLanguage(savedLanguage));
    }
  }, []);

  useEffect(() => {
    const root = document.querySelector(".cm-root");
    if (!root) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("coremath-language", language);
    localizePage(root, language);
    const observer = new MutationObserver(() => localizePage(root, language));
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language, page, activeSlug]);

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("coremath-language", nextLanguage);
  };

  const navigate = (id) => {
    setMenuOpen(false);
    setPage(id);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openPost = (slug) => {
    setActiveSlug(slug);
    navigate("bai-viet");
  };

  let pageContent;
  const blogPosts = adminBlogPosts ?? BLOG_POSTS;
  const allPosts = adminBlogPosts ? [...adminBlogPosts, ...ACHIEVEMENT_POSTS] : ALL_POSTS;

  if (page === "doi-ngu-dao-tao") pageContent = <TeachersPage />;
  else if (page === "khoa-hoc") pageContent = <CoursesPage onNavigate={navigate} />;
  else if (page === "cam-nhan-hoc-vien") pageContent = <TestimonialsPage />;
  else if (page === "gioi-thieu") pageContent = <AboutPage />;
  else if (page === "blog") pageContent = <BlogPage onOpenPost={openPost} posts={blogPosts} />;
  else if (page === "bai-viet")
    pageContent = <PostDetailPage slug={activeSlug} onNavigate={navigate} posts={allPosts} />;
  else if (page === "dang-ky") pageContent = <RegistrationPage />;
      else pageContent = <HomePage onNavigate={navigate} onOpenPost={openPost} blogPosts={blogPosts} />;

  return (
    <div className="cm-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .cm-root {
          --cm-navy: #101E46;
          --cm-navy-light: #1C2F66;
          --cm-navy-soft: #24408C;
          --cm-blue: #2F5EE0;
          --cm-blue-dark: #1E46C4;
          --cm-blue-light: #7FA8F5;
          --cm-blue-pale: #EAF0FD;
          --cm-paper: #F5F7FC;
          --cm-paper-alt: #E9EFFC;
          --cm-ink: #101E46;
          --cm-slate: #56607A;
          --cm-line: #DCE4F5;
          --cm-white: #FFFFFF;

          --font-display: 'Inter', system-ui, sans-serif;
          --font-body: 'Inter', system-ui, sans-serif;
          --font-mono: 'Inter', system-ui, sans-serif;

          font-family: var(--font-body);
          color: var(--cm-ink);
          background: var(--cm-paper);
          line-height: 1.55;
          font-size: 16px;
        }

        .cm-root * { box-sizing: border-box; }
        .cm-root h1, .cm-root h2, .cm-root h3 { font-family: var(--font-display); margin: 0; color: var(--cm-navy); }
        .cm-root p { margin: 0; color: var(--cm-slate); }
        .cm-root ul { list-style: none; margin: 0; padding: 0; }
        .cm-root a { color: inherit; text-decoration: none; }
        .cm-root button { font-family: inherit; cursor: pointer; }
        .cm-root input, .cm-root select, .cm-root textarea { font-family: inherit; }
        .cm-root blockquote { margin: 0; }

        .cm-root a:focus-visible,
        .cm-root button:focus-visible,
        .cm-root input:focus-visible,
        .cm-root select:focus-visible,
        .cm-root textarea:focus-visible {
          outline: 2px solid var(--cm-blue);
          outline-offset: 2px;
        }

        .cm-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }

        .cm-corner-lg { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%); }
        .cm-corner-sm { clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%); }

        .cm-eyebrow {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: var(--cm-blue);
          display: inline-block;
          margin-bottom: 10px;
        }

        .cm-heading h2 { font-size: clamp(26px, 3.2vw, 36px); font-weight: 700; letter-spacing: -0.01em; }
        .cm-heading-center { text-align: center; max-width: 640px; margin: 0 auto 44px; }
        .cm-heading-light .cm-eyebrow { color: var(--cm-blue-light); }
        .cm-heading-light h2 { color: var(--cm-white); }

        /* ---------------- Header ---------------- */
        .cm-header { position: sticky; top: 0; z-index: 40; background: var(--cm-white); box-shadow: 0 1px 0 var(--cm-line); }
        .cm-topbar { background: var(--cm-navy); color: #C9D2DE; font-size: 13px; }
        .cm-topbar-inner { display: flex; align-items: center; justify-content: space-between; height: 36px; }
        .cm-topbar-contact { display: flex; gap: 20px; }
        .cm-topbar-contact a { display: inline-flex; align-items: center; gap: 6px; opacity: 0.9; }
        .cm-topbar-contact a:hover { opacity: 1; color: var(--cm-blue-light); }
        .cm-topbar-links { display: flex; gap: 18px; }
        .cm-topbar-links button {
          display: inline-flex; align-items: center; gap: 6px; opacity: 0.9;
          background: none; border: none; padding: 0; color: inherit; font: inherit;
        }
        .cm-topbar-links button:hover { opacity: 1; color: var(--cm-blue-light); }

        .cm-mainbar-inner { display: flex; align-items: center; justify-content: space-between; height: 76px; gap: 24px; }
        .cm-logo { font-family: var(--font-display); font-weight: 800; font-size: 24px; color: var(--cm-navy); letter-spacing: -0.01em; }
        .cm-logo span { color: var(--cm-blue); }
        .cm-logo-light { color: var(--cm-white); }
        .cm-logo-light span { color: var(--cm-blue-light); }

        .cm-nav-desktop { display: flex; gap: 28px; font-size: 14.5px; font-weight: 600; }
        .cm-nav-desktop button {
          background: none; border: none; padding: 4px 0; color: var(--cm-navy); font: inherit; font-weight: 600;
        }
        .cm-nav-desktop button:hover { color: var(--cm-blue); }
        .cm-nav-link-active { color: var(--cm-blue) !important; }

        .cm-mainbar-actions { display: flex; align-items: center; gap: 14px; }
        .cm-language-picker { display: inline-flex; align-items: center; gap: 6px; color: var(--cm-navy); }
        .cm-language-picker select { appearance: none; border: 1px solid var(--cm-line); border-radius: 6px; padding: 8px 26px 8px 10px; color: var(--cm-navy); background: var(--cm-white); font: 600 13px var(--font-body); cursor: pointer; }
        .cm-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        .cm-menu-btn { display: none; background: none; border: none; color: var(--cm-navy); align-items: center; justify-content: center; }

        .cm-nav-mobile { display: none; }

        .cm-btn { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 14.5px; padding: 12px 22px; border: none; white-space: nowrap; transition: transform 0.15s ease, background 0.15s ease; }
        .cm-btn-lg { padding: 15px 26px; font-size: 15.5px; }
        .cm-btn-blue { background: var(--cm-blue); color: var(--cm-white); }
        .cm-btn-blue:hover { background: var(--cm-blue-dark); transform: translateY(-1px); }
        .cm-btn-navy { background: var(--cm-navy); color: var(--cm-white); }
        .cm-btn-navy:hover { background: var(--cm-navy-soft); transform: translateY(-1px); }

        /* ---------------- Hero carousel ---------------- */
        .cm-hero { padding: 40px 0 96px; }
        .cm-carousel-wrap { position: relative; }
        .cm-carousel { position: relative; overflow: hidden; aspect-ratio: 16 / 7; min-height: 380px; }
        .cm-carousel-track { display: flex; height: 100%; transition: transform 0.6s cubic-bezier(0.65,0,0.35,1); }
        .cm-slide { flex: 0 0 100%; position: relative; display: flex; align-items: flex-end; padding: 44px; overflow: hidden; }
        .cm-slide-bg-0 { background: linear-gradient(135deg, var(--cm-navy), var(--cm-blue-dark)); }
        .cm-slide-bg-1 { background: linear-gradient(135deg, var(--cm-blue-dark), var(--cm-navy-soft)); }
        .cm-slide-bg-2 { background: linear-gradient(135deg, var(--cm-navy-light), var(--cm-blue)); }
        .cm-slide-bg-3 { background: linear-gradient(135deg, var(--cm-blue), var(--cm-navy)); }
        .cm-slide-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 34px 34px; }
        .cm-slide-symbol { position: absolute; top: -18px; right: 24px; font-size: 220px; font-weight: 800; color: rgba(255,255,255,0.08); line-height: 1; pointer-events: none; user-select: none; }
        .cm-slide-content { position: relative; z-index: 1; max-width: 560px; color: var(--cm-white); }
        .cm-slide-content .cm-eyebrow { color: var(--cm-blue-light); }
        .cm-slide-content h1, .cm-slide-content h2 { color: var(--cm-white); font-size: clamp(24px, 3.4vw, 38px); font-weight: 700; line-height: 1.18; margin: 8px 0 14px; }
        .cm-slide-content p { color: #D7E1FA; font-size: 15.5px; margin-bottom: 22px; max-width: 460px; }

        .cm-carousel-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 42px; height: 42px; border-radius: 50%; border: none; background: rgba(255,255,255,0.92); color: var(--cm-navy); display: flex; align-items: center; justify-content: center; z-index: 2; transition: background 0.15s ease; }
        .cm-carousel-arrow:hover { background: var(--cm-white); }
        .cm-carousel-arrow-prev { left: 16px; }
        .cm-carousel-arrow-next { right: 16px; }

        .cm-carousel-dots { position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 2; }
        .cm-carousel-dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: rgba(255,255,255,0.45); padding: 0; }
        .cm-carousel-dot-active { background: var(--cm-white); width: 22px; border-radius: 5px; }

        /* ---------------- Page intro banner ---------------- */
        .cm-page-intro { background: linear-gradient(135deg, var(--cm-navy), var(--cm-blue-dark)); padding: 64px 0 72px; }
        .cm-page-intro .cm-eyebrow { color: var(--cm-blue-light); }
        .cm-page-intro h1 { color: var(--cm-white); font-size: clamp(28px, 4vw, 42px); font-weight: 700; margin: 6px 0 14px; }
        .cm-page-intro p { color: #D7E1FA; font-size: 15.5px; max-width: 560px; }

        /* ---------------- Sections generic ---------------- */
        .cm-section { padding: 84px 0; }
        .cm-section-top { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; gap: 20px; }
        .cm-see-all {
          font-weight: 700; font-size: 14px; color: var(--cm-navy); display: inline-flex; align-items: center; gap: 6px;
          white-space: nowrap; background: none; border: none; padding: 0; font-family: inherit; cursor: pointer;
        }
        .cm-see-all:hover { color: var(--cm-blue); }
        .cm-see-all-light { color: var(--cm-white); }
        .cm-see-all-light:hover { color: var(--cm-blue-light); }

        /* ---------------- Process ---------------- */
        .cm-process { background: var(--cm-white); }
        .cm-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 26px; position: relative; }
        .cm-steps::before {
          content: ""; position: absolute; top: 22px; left: 8%; right: 8%; height: 2px;
          background: repeating-linear-gradient(90deg, var(--cm-line) 0 10px, transparent 10px 18px);
        }
        .cm-step { position: relative; background: var(--cm-paper); padding: 26px 20px 22px; border: 1px solid var(--cm-line); }
        .cm-step-num { font-family: var(--font-mono); font-weight: 700; font-size: 13px; color: var(--cm-white); background: var(--cm-navy); display: inline-flex; padding: 4px 10px; margin-bottom: 14px; }
        .cm-step h3 { font-size: 18px; margin-bottom: 8px; }
        .cm-step p { font-size: 14px; }

        /* ---------------- Personalize ---------------- */
        .cm-personalize { background: var(--cm-navy); }
        .cm-personalize-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .cm-personalize-copy p { color: #B9C2D1; margin-bottom: 16px; font-size: 15px; }
        .cm-personalize-copy p:last-child { margin-bottom: 0; }

        /* ---------------- Video placeholders ---------------- */
        .cm-video { position: relative; aspect-ratio: 16 / 9; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .cm-video-navy { background: linear-gradient(135deg, var(--cm-navy-light), var(--cm-navy-soft)); }
        .cm-video-blue { background: linear-gradient(135deg, var(--cm-blue), var(--cm-navy-soft)); }
        .cm-video-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 26px 26px;
        }
        .cm-play-btn { position: relative; z-index: 1; width: 54px; height: 54px; border-radius: 50%; border: none; background: var(--cm-white); color: var(--cm-blue); display: flex; align-items: center; justify-content: center; padding-left: 3px; transition: transform 0.15s ease; }
        .cm-play-btn:hover { transform: scale(1.06); }
        .cm-video-label { position: absolute; left: 16px; bottom: 12px; z-index: 1; color: var(--cm-white); font-size: 13px; font-weight: 600; max-width: 80%; }

        /* ---------------- Features / icon card grid ---------------- */
        .cm-features { background: var(--cm-paper); }
        .cm-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .cm-feature-card { background: var(--cm-white); border: 1px solid var(--cm-line); padding: 30px 24px; }
        .cm-feature-icon { width: 44px; height: 44px; border-radius: 50%; background: var(--cm-blue-pale); color: var(--cm-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .cm-feature-card h3 { font-size: 17px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.01em; }
        .cm-feature-card p { font-size: 14px; }
        .cm-features-cta { text-align: center; margin-top: 40px; }

        .cm-section.cm-values, .cm-section.cm-about { background: var(--cm-white); }
        .cm-section.cm-standards, .cm-section.cm-courses, .cm-section.cm-testimonials { background: var(--cm-paper); }

        /* ---------------- Demo video gallery ---------------- */
        .cm-gallery-dark { background: linear-gradient(135deg, var(--cm-navy), var(--cm-navy-light)); }
        .cm-gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }

        /* ---------------- Achievement photo gallery ---------------- */
        .cm-photo-gallery { background: var(--cm-white); }
        .cm-photo-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 120px; gap: 16px; }
        .cm-photo-tile { position: relative; grid-row: span 2; display: flex; align-items: flex-end; padding: 16px; overflow: hidden; color: var(--cm-white); }
        .cm-photo-tile-tall { grid-row: span 3; }
        .cm-photo-tone-0 { background: linear-gradient(135deg, var(--cm-navy), var(--cm-blue-dark)); }
        .cm-photo-tone-1 { background: linear-gradient(135deg, var(--cm-blue), var(--cm-navy-soft)); }
        .cm-photo-tone-2 { background: linear-gradient(135deg, var(--cm-blue-light), var(--cm-blue)); }
        .cm-photo-icon { position: absolute; top: 14px; right: 14px; color: rgba(255,255,255,0.6); }
        .cm-photo-tile figcaption { position: relative; z-index: 1; font-size: 13px; font-weight: 600; line-height: 1.3; margin: 0; }

        /* ---------------- Teachers ---------------- */
        .cm-teachers { background: var(--cm-paper); }
        .cm-teachers-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .cm-teacher-card { background: var(--cm-white); border: 1px solid var(--cm-line); text-align: left; display: flex; flex-direction: column; overflow: hidden; }
        .cm-teacher-photo { aspect-ratio: 4 / 5; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.9); }
        .cm-teacher-photo-0 { background: linear-gradient(135deg, var(--cm-navy), var(--cm-blue-dark)); }
        .cm-teacher-photo-1 { background: linear-gradient(135deg, var(--cm-blue), var(--cm-navy-soft)); }
        .cm-teacher-photo-2 { background: linear-gradient(135deg, var(--cm-blue-light), var(--cm-blue)); }
        .cm-teacher-body { padding: 22px; }
        .cm-teacher-avatar-mini { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 50%; background: var(--cm-navy); color: var(--cm-blue-light); font-weight: 700; font-size: 12px; margin-bottom: 12px; }
        .cm-teacher-card h3 { font-size: 17px; margin-bottom: 6px; }
        .cm-teacher-tag { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: var(--cm-blue); display: inline-block; margin-bottom: 14px; }
        .cm-teacher-card ul { display: flex; flex-direction: column; gap: 8px; }
        .cm-teacher-card li { display: flex; gap: 8px; font-size: 13px; color: var(--cm-slate); align-items: flex-start; }
        .cm-teacher-card li svg { flex-shrink: 0; margin-top: 2px; color: var(--cm-blue); }

        /* ---------------- Blog / Achievements ---------------- */
        .cm-blog, .cm-blog-page { background: var(--cm-white); }
        .cm-achievements { background: var(--cm-navy); }
        .cm-blog-grid, .cm-achievements-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .cm-achievements-grid { grid-template-columns: repeat(2, 1fr); }
        .cm-blog-card { background: var(--cm-paper); border: 1px solid var(--cm-line); display: flex; flex-direction: column; }
        .cm-blog-card-dark { background: var(--cm-navy-light); border-color: var(--cm-navy-soft); }
        .cm-blog-thumb { aspect-ratio: 16/10; background: linear-gradient(135deg, var(--cm-paper-alt), #D7E1FA); position: relative; }
        .cm-blog-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .cm-blog-card-dark .cm-blog-thumb { background: linear-gradient(135deg, var(--cm-navy-soft), var(--cm-navy-light)); }
        .cm-blog-body { padding: 22px; }
        .cm-blog-meta { display: flex; gap: 10px; font-family: var(--font-mono); font-size: 11.5px; color: var(--cm-blue); margin-bottom: 10px; }
        .cm-blog-card-dark .cm-blog-meta { color: var(--cm-blue-light); }
        .cm-blog-body h3 { font-size: 17px; margin-bottom: 8px; line-height: 1.3; }
        .cm-blog-card-dark h3 { color: var(--cm-white); }
        .cm-blog-body p { font-size: 13.5px; margin-bottom: 14px; }
        .cm-blog-card-dark p { color: #B9C2D1; }
        .cm-blog-link {
          font-weight: 700; font-size: 13.5px; color: var(--cm-navy); display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; padding: 0; font-family: inherit; cursor: pointer;
        }
        .cm-blog-card-dark .cm-blog-link { color: var(--cm-blue-light); }

        /* ---------------- Post detail ---------------- */
        .cm-post-inner { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }
        .cm-post-inner p { font-size: 15.5px; line-height: 1.75; }
        .cm-post-media { width: 100%; height: auto; max-height: 680px; object-fit: contain; border-radius: 12px; background: #0b1020; }
        .cm-post-back { margin-bottom: 6px; }

        /* ---------------- Courses ---------------- */
        .cm-courses-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; }
        .cm-course-card { background: var(--cm-white); border: 1px solid var(--cm-line); padding: 26px 24px; display: flex; flex-direction: column; gap: 8px; }
        .cm-course-level { font-family: var(--font-mono); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: var(--cm-blue); }
        .cm-course-card h3 { font-size: 18px; }
        .cm-course-card p { font-size: 14px; margin-bottom: 4px; }

        /* ---------------- Testimonials ---------------- */
        .cm-testimonial-photo-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .cm-testimonial-photo-grid .cm-photo-tile { grid-row: auto; aspect-ratio: 3 / 4; padding: 18px; }
        .cm-testimonial-quote { display: block; font-size: 13.5px; font-weight: 600; line-height: 1.4; margin-bottom: 6px; }
        .cm-testimonial-author { display: block; font-size: 11.5px; opacity: 0.85; }

        /* ---------------- About ---------------- */
        .cm-about-inner { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
        .cm-about-inner p { font-size: 15.5px; }

        /* ---------------- Registration page ---------------- */
        .cm-registration { background: var(--cm-paper-alt); }
        .cm-registration-inner { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 56px; align-items: start; }
        .cm-registration-side p { font-size: 15px; margin-bottom: 22px; max-width: 420px; }
        .cm-final-contact { display: flex; flex-direction: column; gap: 10px; font-weight: 600; font-size: 14.5px; }
        .cm-final-contact span { display: inline-flex; align-items: center; gap: 8px; color: var(--cm-navy); }
        .cm-form { background: var(--cm-white); padding: 30px; border: 1px solid var(--cm-line); }
        .cm-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 14px; }
        .cm-form-full { grid-column: 1 / -1; }
        .cm-form label { display: flex; flex-direction: column; gap: 6px; font-size: 13px; font-weight: 600; color: var(--cm-navy); }
        .cm-form input, .cm-form select, .cm-form textarea { padding: 11px 12px; border: 1px solid var(--cm-line); background: var(--cm-paper); font-size: 14.5px; color: var(--cm-ink); }
        .cm-form textarea { resize: vertical; font-family: inherit; }
        .cm-form-label { font-size: 13px; font-weight: 600; color: var(--cm-navy); display: block; margin-bottom: 4px; }
        .cm-subject-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .cm-chip { padding: 8px 14px; border: 1px solid var(--cm-line); background: var(--cm-paper); color: var(--cm-navy); font-size: 13px; font-weight: 600; transition: all 0.15s ease; }
        .cm-chip:hover { border-color: var(--cm-blue); }
        .cm-chip-active { background: var(--cm-blue); border-color: var(--cm-blue); color: var(--cm-white); }
        .cm-form button.cm-btn { justify-content: center; margin-top: 6px; }

        /* ---------------- Footer ---------------- */
        .cm-footer { background: var(--cm-navy); color: #B9C2D1; padding: 60px 0 0; }
        .cm-footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr; gap: 40px; padding-bottom: 40px; }
        .cm-footer-grid p { color: #97A2B4; font-size: 13.5px; margin-top: 12px; max-width: 320px; }
        .cm-footer h4 { color: var(--cm-white); font-family: var(--font-body); font-size: 14px; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 16px; }
        .cm-footer li { margin-bottom: 10px; font-size: 14px; }
        .cm-footer li button {
          display: inline-flex; align-items: center; gap: 8px; background: none; border: none; padding: 0;
          color: inherit; font: inherit; text-align: left;
        }
        .cm-footer li button:hover { color: var(--cm-blue-light); }
        .cm-footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding: 18px 24px; text-align: center; font-size: 12.5px; color: #7C8AA0; }

        /* ---------------- Floating CTA ---------------- */
        .cm-floating-cta { position: fixed; right: 22px; bottom: 22px; z-index: 50; background: var(--cm-blue); color: var(--cm-white); font-weight: 700; font-size: 14px; padding: 13px 20px; display: inline-flex; align-items: center; gap: 8px; border: none; box-shadow: 0 8px 20px rgba(16,30,70,0.28); clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%); transition: transform 0.15s ease, background 0.15s ease; }
        .cm-floating-cta:hover { background: var(--cm-blue-dark); transform: translateY(-2px); }

        @media (prefers-reduced-motion: reduce) {
          .cm-btn, .cm-play-btn, .cm-floating-cta, .cm-carousel-track { transition: none; }
        }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .cm-topbar-links { display: none; }
          .cm-nav-desktop { display: none; }
          .cm-menu-btn { display: flex; }
          .cm-nav-mobile { display: flex; flex-direction: column; gap: 4px; padding: 16px 24px 22px; background: var(--cm-white); border-top: 1px solid var(--cm-line); }
          .cm-nav-mobile button { display: block; width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid var(--cm-line); padding: 10px 0; font-weight: 600; font-size: 15px; color: var(--cm-navy); }
          .cm-nav-mobile .cm-btn { justify-content: center; margin-top: 12px; }

          .cm-carousel { aspect-ratio: auto; min-height: 460px; }
          .cm-slide-symbol { font-size: 140px; }

          .cm-personalize-inner, .cm-registration-inner { grid-template-columns: 1fr; }

          .cm-steps { grid-template-columns: repeat(2, 1fr); }
          .cm-steps::before { display: none; }

          .cm-features-grid { grid-template-columns: repeat(2, 1fr); }
          .cm-gallery-grid { grid-template-columns: 1fr; }
          .cm-teachers-grid { grid-template-columns: repeat(2, 1fr); }
          .cm-blog-grid { grid-template-columns: 1fr; }
          .cm-achievements-grid { grid-template-columns: 1fr; }
          .cm-photo-grid { grid-template-columns: repeat(2, 1fr); }
          .cm-form-grid { grid-template-columns: 1fr; }
          .cm-courses-grid { grid-template-columns: 1fr; }
          .cm-testimonial-photo-grid { grid-template-columns: repeat(2, 1fr); }

          .cm-footer-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .cm-features-grid, .cm-teachers-grid { grid-template-columns: 1fr; }
          .cm-photo-grid { grid-template-columns: 1fr; }
          .cm-photo-tile, .cm-photo-tile-tall { grid-row: span 1; aspect-ratio: 4 / 3; }
          .cm-testimonial-photo-grid { grid-template-columns: 1fr; }
          .cm-testimonial-photo-grid .cm-photo-tile { aspect-ratio: 4 / 3; }
          .cm-section { padding: 60px 0; }
          .cm-page-intro { padding: 48px 0 56px; }
          .cm-carousel { min-height: 520px; }
        }
      `}</style>

      <Header
        open={menuOpen}
        setOpen={setMenuOpen}
        activePage={page}
        onNavigate={navigate}
        language={language}
        onLanguageChange={changeLanguage}
      />

      {pageContent}

      <Footer onNavigate={navigate} />
      <FloatingCTA onNavigate={navigate} />
    </div>
  );
}
