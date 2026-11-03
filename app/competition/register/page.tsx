"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArchedLogo from "@/components/ArchedLogo";
import { 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileCheck, 
  Sparkles,
  AlertCircle
} from "lucide-react";

const APPROVED_COLLEGES = [
  "School of Architecture Gandhi Institute of Technology and Management, GITAM",
  "Chandigarh College Of Architecture",
  "College Of Architecture Vastu Kala Academy",
  "University School Of Architecture & Planning Guru Gobind Singh Indraprastha University",
  "Faculty Of Architecture Sarvajanik College Of Engineering & Technology",
  "College Of Architecture Sardar Vallabhai Patel Institute Of Technology",
  "Shri Gijubhai Chhaganbhai Patel Institute of Architecture, Interior Design and Fine Arts",
  "ITM School Of Architecture Art And Design",
  "Institute of Architecture & Planning Nirma University",
  "Sal School Of Architecture",
  "Sushant School Of Art & Architecture",
  "Deen Bandhu Chhotu Ram University Of Science & Technology",
  "Om Institute Of Architecture & Design",
  "Ganga Institute Of Architecture & Town Planning",
  "Manipal School of Architecture and Planning",
  "BMS College of Architecture",
  "Dayananda Sagar School of Architecture",
  "Malik Sandal Institute Of Art & Architecture",
  "School Of Architecture MS Ramaiah Institute Of Technology",
  "R.V. College of Architecture",
  "School of Planning and Architecture University of Mysore",
  "BMS School of Architecture",
  "SJB School of Architecture and Planning",
  "IMPACT School Of Architecture",
  "Gopalan School of Architecture and Planning",
  "School of Architecture, Reva University",
  "School of Architecture, Christ University",
  "Department of Architecture College Of Engineering, Thiruvananthapuram",
  "School Of Architecture MES College Of Engineering",
  "Devaki Ammas Guruvayurappan College of Architecture",
  "Mangalam School Of Architecture And Planning",
  "L.S.Raheja School Of Architecture",
  "School of Architecture G.S.Mandals Marathwada Institute of Technology",
  "Shri Prince Shivaji Maratha Boarding Houses College Of Architecture",
  "Department of Architecture Jawahar Lal Nehru Engineering College",
  "Maratha Vidya Prasarak Samajs Sharadchandraji Pawar College of Architecture",
  "Bharati Vidyapeeths College Of Architecture",
  "Kamala Raheja Vidyanidhi Institute For Architecture & Environmental Studies",
  "D.Y.Patil School of Architecture",
  "Mahatma Education Societys Pillai College Of Architecture",
  "Rizvi College Of Architecture",
  "Bharati Vidyapeeth University College Of Architecture",
  "Smt.Manoramabai Mundle, College of Architecture",
  "Maharshi Karve Stree Shikshan Samstha s Dr. Bhanuben Nanavati College Of Architecture For Women",
  "Shri V.B.Patil Trusts Appasaheb Birnale College Of Architecture",
  "Priyadarshini Institute Of Architecture And Design Studies",
  "Dr.Baliram Hiray College of Architecture",
  "Vivekanand Institute of Technologys Padmabhushan Dr.Vasantdada Patil College of Architecture",
  "M.C.E.Society's Allana College Of Architecture",
  "Padmashree Dr.D.Y. Patil College of Architecture",
  "Sinhgad College of Architecture",
  "Balwant Sheth School of Architecture",
  "IDEAS-Institute Of Design Education & Architecture Studies",
  "Aayojan School Of Architecture And Design",
  "BRICK School of Architecture",
  "Aditya College Of Architecture",
  "C.T.E.S.College Of Architecture",
  "Smt. Kashibai Navale College of Architecture",
  "MIT Art, Design and Technology University Punes School of Architecture",
  "I.P.S.Academys School Of Architecture",
  "Faculty of Architecture RKDF University",
  "Piloo-Mody College Of Architecture",
  "School of Architecture and Planning KIIT University",
  "Lovely Professional University",
  "University Institute of Architecture",
  "Aayojan School Of Architecture",
  "School Of Architecture & Interior Design SRM Institute of Science and Technology",
  "School of Architecture, Bharat University",
  "School of Planning, Architecture and Design Excellence SPADE Hindustan Institute of Technology and Science",
  "Faculty Of Architecture Sathyabama University",
  "School Of Architecture Thiagarajar College Of Engineering",
  "School of Architecture and Planning Periyar Maniammai University",
  "MEASI Academy Of Architecture",
  "McGans Ooty School of Architecture",
  "School Of Architecture Meenakshi College Of Engineering",
  "Faculty of Architecture, Karpagam Academy of Higher Education",
  "EXCEL College Of Architecture And Planning",
  "School of Environment Architecture and Design [SEAD] SRM University",
  "Crescent School Of Architecture",
  "Mohamed Sathak A.J. Academy Of Architecture",
  "MARG Institute Of Design-and Architecture",
  "Rajalakshmi School of Architecture",
  "RVS-Padmavathy School Of Architecture",
  "Faculty Of Architecture Dr.M.G.R. Educational And Research Institute University",
  "School Of Architecture Coimbatore Institute Of Engineering And Technology",
  "Sigma College Of Architecture",
  "Kalasalingam School of Architecture",
  "San Academy of Architecture",
  "School Of Architecture CSI Institute Of Technology",
  "Sri Venkateswara College Of Architecture",
  "School Of Planning and Architecture Jawaharlal Nehru Institute Of Advanced Studies",
  "J.B.R. Architecture College",
  "Aurora-S Design Academy",
  "Aurora-s Design Institute",
  "Ashoka School of Planning and Architecture",
  "Faculty of Architecture Dr.A.P.J.Abdul Kalam Technical University",
  "Amity School Of Architecture & Design Amity University",
  "Sunder Deep College Of Architecture",
  "Sharda School of Design, Architecture & Planning",
  "School of Architecture and Regional Planning, Gautam Buddha University",
  "Faculty Of Architecture Jadavpur University",
  "Om Dayal School Of Architecture",
  "Techno India University, School Of Architecture",
  "Faculty Of ArchitectureCollege Of Engineering Andhra University",
  "ANU College of Architecture & Planning",
  "School Of Planning And Architecture, Vijayawada",
  "M.R.K.College Of Architecture",
  "Department of Architecture, K.L.E.F. University",
  "Chadalawada Aruna School of Architecture",
  "School of Architecture, Dr.YSR Architecture and Fine Arts University",
  "Guwahati College Of Architecture",
  "Royal School Of Architecture",
  "HAM-AK COLLEGE OF ARCHITECTURE, PLANNING AND DESIGN",
  "Faculty Of Architecture, National Institute Of Technology, Patna",
  "School of Architecture, Gaya College of Engineering",
  "Faculty Of Architecture, National Institute Of Technology, Raipur",
  "Amity School of Architecture and Planning Amity University Chhattisgarh",
  "School of Planning Architecture, Delhi",
  "Faculty Of Architecture And Ekistics Jamia Millia Islamia",
  "MBS School Of Planning And Architecture",
  "Department of Architecture, Indira Gandhi Delhi Technical University for Women",
  "Department of Architecture and Planning, Netaji Subhas University of Technology",
  "Goa College Of Architecture",
  "Faculty Of Architecture, M.S. University of Baroda",
  "Faculty of Architecture, CEPT University",
  "D.C.Patel School Of Architecture",
  "Vyavasay Vidya Pratishthans Indubhai Parekh School Of Architecture",
  "Institute of Architecture, Hemchandracharya North Gujarat University",
  "School of Architecture, Anant National University",
  "School Of Design And Architecture Navrachana University",
  "Faculty of Architecture, Parul Institute of Architecture and Research",
  "Institute of Design, Environment and Architecture Indus University",
  "Bhagwan Mahavir College Of Architecture",
  "L.J. School Of Architecture",
  "Raman Bhakta School Of Architecture",
  "Swarrnim Institute Of Design",
  "Institute of Architecture, Ganpat University",
  "P P Savani School of Architecture",
  "Manjushree Institute of Design MID",
  "Faculty Of Architecture National Institute of Technology Hamirpur",
  "RAJIV GANDHI GOVERNMENT ENGINEERING COLLEGE KANGRA",
  "Gateway College Of Architecture & Design",
  "Lingayas University School of Architecture",
  "Hindu College of Design, Architecture & Planning",
  "Department of Planning and Architecture, Faculty of Planning and Architecture Dada Lakhmi Chand State University",
  "School of Architecture & Planning, K.R.Mangalam University",
  "Delhi Institute Of Architecture & Planning",
  "World School of Planning and Architecture",
  "Jindal School of Design and Architecture",
  "ST. ANDREWS COLLEGE OF ARCHITECTURE & PLANNING",
  "CCLS COLLEGE OF ARCHITECTURE & DESIGN",
  "National Institute of Technology Kurukshetra",
  "Department of Architecture & Planning, Birla Institute Of Technology",
  "School of Architecture and Landscaping, College of Engineering SMVD University",
  "School of Architecture Government College of Engineering and Technology",
  "School of Architecture-Kashmir",
  "Islamic University of Science & Technology",
  "School of Architecture, University of Visvesvaraya College of Engineering",
  "School of Design and Architecture Manipal University-Dubai",
  "School of Architecture KLE Technological University",
  "Poojya Dr. Shivakumar Swamiji School of Architecture",
  "Acharyas NRV School of Architecture",
  "The Oxford School of Architecture",
  "School Of Architecture Srinivas Institute Of Technology",
  "School of Architecture, Dayananda Sagar Academy of Technology and Management",
  "Mysore School of Architecture",
  "Bearys Enviro-Architecture Design School",
  "Nitte Institute of Architecture",
  "K.S.School of Architecture",
  "Wadiyar Centre For Architecture",
  "Aditya Academy of Architecture and Design",
  "School of Architecture, CMR University",
  "Sri Siddhartha School of Architecture",
  "Faculty of Architecture, PES University",
  "Nitte School of Architecture Planning and Design",
  "Angadi School of Architecture",
  "RNS SCHOOL OF ARCHITECTURE",
  "Sir MV School of Architecture",
  "EAST WEST SCHOOL OF ARCHITECTURE",
  "Department of Architecture, Faculty of Engineering & Technology Sharnbasva University",
  "GSSS SCHOOL OF ARCHITECTURE FOR WOMEN",
  "School Of Architecture TKM College Of Engineering",
  "Faculty Of Architecture National Institute Of Technology, KOZHIKODE",
  "School Of Architecture Government Engineering College THRISSUR",
  "Bishop Jerome School of Architecture & Design",
  "School Of Architecture Rajiv-Gandhi Institute Of Technology",
  "Holy Crescent College Of Architecture",
  "TKM School Of Architecture",
  "College Of Architecture Thinavila",
  "IES-College-of Architecture",
  "ABATE Institute of Architecture",
  "School Of Architecture College Of Engineering And Technology Payyanur",
  "Asian School Of Architecture And Design Innovations",
  "Global Institute Of Architecture",
  "KMCT College Of Architecture",
  "KMEA College of Architecture",
  "School Of Architecture Mookambika Technical Campus",
  "MES College of Architecture",
  "Marian College of Architecture & Planning",
  "Eranad Knowledge City College of Architecture",
  "SCMS School of Architecture",
  "Vedavyasa College Of Architecture",
  "Thejus College of Architecture",
  "DC School Of Architecture And Design",
  "Avani Institute of Design",
  "Nehru College of Architecture",
  "SEED-A.P.J. Abdul Kalam School of Environmental Design",
  "Sir J.J. College Of Architecture",
  "Academy Of Architecture",
  "Faculty Of Architecture Visvesvaraya National Institute Of Technology",
  "BKPS College Of Architecture",
  "School Of Architecture, College Of Engineering & Technology Akola",
  "School Of Architecture D.Y. Patil College Of Engineering and Technology",
  "Indian Education Society s College Of Architecture",
  "Pravara Rural College Of Architecture",
  "Vidya Pratishthans School of Architecture",
  "ADAS Minerva College of Architecture",
  "P.R.Patil College of Architecture",
  "VIVA School of Architecture",
  "Mahatma Education Societys Pillais HOC College of Architecture",
  "School of Architecture Anjuman-I-Islams Kalsekar Technical Campus",
  "Lokmanya Tilak Institute Of Architecture & Design",
  "Tulsiramji Gaikwad-Patil College of Architecture",
  "St. Wilfreds Institute Of Architecture",
  "Smt. Premalati Chavan College of Architecture",
  "Akhil Bharatiya Maratha Shikshan Parishads Anantrao Pawar College of Architecture",
  "Thakur School Of Architecture & Planning",
  "Pimpri Chinchwad Education Trust S.B.Patil College of Architecture and Design",
  "School Of Environment And Architecture",
  "KJ's Educational Institute, Trinity College of Architecture",
  "Yashoda College of Architecture",
  "METS School of Architecture and Interior Design",
  "Vishwaniketan College of Architecture, Arts and Design",
  "Shri Shivaji Maratha Societys College of Architecture",
  "Walwa Taluka Education Societys Shri S.D.Patil College of Architecture",
  "Smt.K.L.Tiwari College of Architecture",
  "Pune District Education Associations College of Architecture",
  "Ramesh Phirodia College of Architecture",
  "School of Architecture, Symbiosis Skills and Professional University",
  "Vivekanand Education Society College of Architecture",
  "D. Y. Patil College of Architecture",
  "VASANTDADA PATIL PRATISHTHANS MANOHAR PHALKE COLLEGE OF ARCHITECTURE",
  "Solapur Education Societys College of Architecture",
  "Dayanand College of Architecture",
  "Symbiosis School of Planning, Architecture and Design",
  "TATYASAHEB KORE COLLEGE OF ARCHITECTURE",
  "SIPNA SCHOOL OF PLANNING AND ARCHITECTURE",
  "School of Architecture and Planning Vishwakarma University",
  "Department of Architecture, NICMAR University",
  "Adsul Architecture College",
  "Department Of Architecture School Of Technology North-Eastern Hill University",
  "Faculty Of Architecture, Maulana Azad National Institute Of Technology",
  "Madhav Institute of Technology & Science",
  "Hitkarni College Of Architecture & Town",
  "School of Planning & Architecture, Bhopal",
  "Shri Vaishnav Institute of Architecture",
  "Institute of Architecture, Sage University",
  "School of Architecture, Rajiv Gandhi Proudyogiki Vishwavidyalaya",
  "SCHOOL OF DESIGN, SRI SATYA SAI UNIVERSITY OF TECHNOLOGY AND MEDICAL SCIENCES",
  "School of Architecture, VIT Bhopal University",
  "Jagran School of Architecture",
  "Department of Planning and Architecture, Mizoram University",
  "Faculty of Architecture and Design, College of Engineering & Technology Bhubaneswar",
  "SGI School Of Architecture",
  "National Institute Of Technology Rourkela",
  "Faculty of Architecture, Sri Sri University",
  "Department of Architecture Veer Surendra Sal University of Technology",
  "Faculty Of Physical Planning & Architecture Guru Nanak Dev University",
  "Giani Zail Singh School of Architecture & Planning",
  "Indo Global College of Architecture",
  "Chitkara School of Planning and Architecture",
  "College Of Architecture I.E.T.Bhaddal",
  "RIMT College Of Architecture",
  "Department Of Architecture I. K. Gujral Punjab Technical University",
  "CT Institute Of Architecture And Planning",
  "School of Architecture, Shaheed Bhagat Singh State Technical Campus",
  "GNDEC School of Architecture",
  "Soldier College of Architecture",
  "School of Architecture Sri Manakula Vinayagar Engineering College",
  "Department of Architecture and Planning, Malaviya National Institute of Technology",
  "Head Department of Architecture, MBM University",
  "School Of Architecture, Apex University",
  "Faculty of Planning & Architecture, Poornima University",
  "Faculty of Architecture & Planning, Vivekananda Global University",
  "School of Architecture, Banasthali Vidyapith",
  "College of Architecture, Mohanlal Sukhadia University",
  "Biyani Institute of Architecture and Design",
  "School of Architecture, Rajasthan Institute of Engineering and Technology",
  "Jai Minesh Adivasi University",
  "School Of Architecture & Planning Anna University",
  "Faculty Of Architecture National Institute Of Technology TIRUCHIRAPALLI",
  "School Of Architecture Adhiyamman College Of Engineering",
  "School Of Architecture, Mohammed Sathak Engineering College",
  "School of Building and Environment, Sathyabama Institute of Science & Technology",
  "Tamilnadu School Of Architecture",
  "R.V.S. School of Architecture",
  "Department of Architecture, EXCEL Engineering College",
  "School of Architecture, Sri Sai Ranganathan Engineering College",
  "C.A.R.E.School Of Architecture",
  "Aalim Muhammed Salegh Academy of Architecture",
  "Prime College Of Architecture and Planning",
  "Sasi Creative School Of Architecture",
  "St. Peters School Of Architecture",
  "School of Architecture St. Peters College of Engineering and Technology",
  "Department of Architecture, Kongu Engineering College",
  "Arul Tharum VPMM College of Architecture",
  "School of Architecture, VIT University",
  "Prime Nest College of Architecture and Planning",
  "Hindusthan School of Architecture",
  "CAAD-Chennai Academy of Architecture and Design",
  "Nehru School of Architecture",
  "Sree Sastha School of Architecture and Planning",
  "Rathinam School of Architecture",
  "IMMANUEL ARASAR COLLEGE OF ARCHITECTURE",
  "Rathinam School of Architecture and Design at TIPS Global",
  "PAPNI SCHOOL OF ARCHITECTURE",
  "Chettinad School of Architecture",
  "Saveetha College of Architecture and Design",
  "PSG Institute of Architecture and Planning",
  "School of Architecture Mepco Schlenk Engineering College",
  "Dhanalakshmi Srinivasan University-School of Architecture",
  "SURYA SCHOOL OF ARCHITECTURE",
  "Amrita School of Architecture",
  "Department of Architecture, Kingston Engineering College",
  "School Of Planning and Architecture Jawaharlal Nehru Technological University",
  "Vaishnavi School Of Architecture and Planning",
  "Deccan School Of Planning and Architecture",
  "ICFAI School of Architecture",
  "Woxsen School of Architecture and Planning",
  "Department Of Architecture & Planning, Indian Institute Of Technology ROORKEE",
  "DIT- Faculty Of Architecture Dehradun Institute Of Technology",
  "Dev Bhoomi School of Architecture",
  "Faculty Of Architecture, Zakir Hussain College Of Engineering & Tech., Aligarh Muslim University",
  "School Of Architecture & Planning Apeejay Institute Of Technology",
  "School of Architecture & Planning, Babu Banarasi Das University",
  "Faculty of Architecture, Planning and Design Integral University",
  "Amity School Of Architecture & Planning Dubai Campus",
  "Institute Of Architecture And Town Planning Bundelkhand University",
  "College Of Architecture Moradabad Educational Trust",
  "ITM School Of Architecture & Town Planning",
  "School of Architecture Delhi Technical Campus",
  "Shri Ram School Of Architecture",
  "Purvanchal Institute of Architecture & Design",
  "Sanskar College of Architecture & Planning",
  "Axis Institute Of Architecture",
  "Dayalbagh Educational Institute",
  "Department of Architecture, Planning and Design IIT BHU",
  "Dept. of Architecture, Town and Regional Planning, Indian Institute of Engineering Science and Technology, Shibpur",
  "Faculty Of Architecture & Regional Planning Indian Institute Of Technology KHARAGPUR",
  "Rani Rashmoni School of Architecture",
  "SISTER NIVEDITA UNIVERSITY"
];

export default function CompetitionRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    college: "",
    address: "",
    country: "India",
    lat: "",
    lng: "",
    phone: "",
    email: "",
    terms: false,
  });

  const [locationStatus, setLocationStatus] = useState("Click to fetch GPS data");
  const [locationSuccess, setLocationSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFetchLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus("Geolocation is not supported by your browser.");
      return;
    }

    setLocationStatus("Locating... Please allow permissions if prompted.");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          lat: position.coords.latitude.toFixed(6),
          lng: position.coords.longitude.toFixed(6),
        }));
        setLocationStatus("Location captured securely via GPS");
        setLocationSuccess(true);
      },
      (error) => {
        setLocationStatus("Failed to get location. Please enable GPS/Location services.");
        setLocationSuccess(false);
      }
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.lat || !formData.lng) {
      alert("Please click 'Auto-Detect My Location' to record your institution coordinates.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/v1/competitions/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmissionSuccess(data);
        if (typeof window !== "undefined") {
          localStorage.setItem("arched_student_session", JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            college: formData.college,
            registrationCode: data.registrationCode,
            registeredAt: new Date().toISOString(),
          }));
        }
      } else {
        setErrorMessage(data.error || "Failed to submit registration. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error while submitting. Please check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1a1a1a]">
      {submissionSuccess ? (
        /* SUCCESS CONFIRMATION VIEW */
        <div className="max-w-2xl mx-auto py-24 px-6 text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-[#f4f5f7] border border-[#e0e4e8] flex items-center justify-center text-[#2c3e50]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-light tracking-tight text-[#1a1a1a]">
              Registration Confirmed
            </h1>
            <p className="text-sm text-[#7f8c8d]">
              Your candidate profile has been registered in the Arched PostgreSQL database.
            </p>
          </div>

          <div className="p-6 bg-[#f4f5f7] border border-[#e0e4e8] text-left space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-[#e0e4e8] pb-2">
              <span className="text-[#7f8c8d]">Candidate Name</span>
              <strong className="text-[#1a1a1a]">{formData.fullName}</strong>
            </div>
            <div className="flex justify-between border-b border-[#e0e4e8] pb-2">
              <span className="text-[#7f8c8d]">Registration Code</span>
              <strong className="text-[#2c3e50]">{submissionSuccess.registrationCode}</strong>
            </div>
            <div className="flex justify-between border-b border-[#e0e4e8] pb-2">
              <span className="text-[#7f8c8d]">Institution</span>
              <span className="text-[#1a1a1a] truncate max-w-xs">{formData.college}</span>
            </div>
            <div className="flex justify-between border-b border-[#e0e4e8] pb-2">
              <span className="text-[#7f8c8d]">Origin Coordinates</span>
              <span className="text-[#1a1a1a]">{formData.lat}, {formData.lng}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7f8c8d]">Fee Status</span>
              <span className="text-[#2e7d32] font-semibold">Complimentary Open Access</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/competition"
              className="px-6 py-3 bg-[#2c3e50] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1a252f] transition-colors"
            >
              Explore Competitions
            </Link>
            <Link
              href="/dashboard/student"
              className="px-6 py-3 border border-[#e0e4e8] text-xs font-semibold uppercase tracking-wider hover:border-[#2c3e50] text-[#2c3e50] transition-colors"
            >
              Go to Student Portal
            </Link>
          </div>
        </div>
      ) : (
        /* REGISTRATION SPLIT LAYOUT */
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Hero Section (Charcoal Minimalist Architectural Aesthetic) */}
          <div className="lg:w-5/12 bg-[#2c3e50] text-white p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <Link href="/">
                <ArchedLogo size="lg" theme="light" />
              </Link>
            </div>

            <div className="relative z-10 py-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a252f] border border-slate-600 text-slate-300 text-[10px] font-mono uppercase tracking-widest">
                National Student Enrollment &bull; Open Cycle
              </div>
              <h1 className="text-3xl lg:text-4xl font-light tracking-tight leading-tight">
                Architectural Competition
                <br />
                <span className="font-semibold text-slate-200">Global Edition 2026</span>
              </h1>
              <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-md">
                Streamlined registration for undergraduate and postgraduate architecture students. No complex fee tiers. Submit your profile, auto-detect your studio coordinates, and participate in juries evaluated anonymously.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-600 text-[11px] text-slate-400 font-mono flex items-center justify-between">
              <span>Arched India Ecosystem</span>
              <span>arched.in</span>
            </div>
          </div>

          {/* Right Form Section (Crisp White Card / Charcoal inputs) */}
          <div className="lg:w-7/12 p-8 lg:p-14 bg-white flex flex-col justify-center">
            <div className="max-w-2xl w-full mx-auto space-y-6">
              <div>
                <h2 className="text-2xl font-light text-[#1a1a1a] tracking-tight">
                  Candidate Registration
                </h2>
                <p className="text-xs text-[#7f8c8d] mt-1">
                  Complete these essential details to receive your official registration dossier.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-[#a10f0f] text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Full Name & DOB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                    />
                  </div>
                </div>

                {/* College with Approved Datalist */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                    College / University / Firm *
                  </label>
                  <input
                    type="text"
                    required
                    list="approved-colleges"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="Search or type your institution name..."
                    className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                  />
                  <datalist id="approved-colleges">
                    {APPROVED_COLLEGES.map((college, idx) => (
                      <option key={idx} value={college} />
                    ))}
                  </datalist>
                </div>

                {/* Communication Address */}
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                    Communication Address *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street, City, Postal Code"
                    className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                  />
                </div>

                {/* Country & Location Detection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. India"
                      className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Location Coordinates *
                    </label>
                    <button
                      type="button"
                      onClick={handleFetchLocation}
                      className={`w-full py-2.5 px-3 border border-dashed text-xs font-medium flex items-center justify-center gap-2 transition-colors ${
                        locationSuccess
                          ? "border-[#2e7d32] bg-[#f1f8e9] text-[#2e7d32]"
                          : "border-[#7f8c8d] bg-[#f8f9fa] text-[#2c3e50] hover:bg-[#e9ecef]"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{locationSuccess ? "Location Captured" : "Auto-Detect My Location"}</span>
                    </button>
                    <div
                      className={`text-[10px] mt-1 text-center ${
                        locationSuccess ? "text-[#2e7d32] font-medium" : "text-[#7f8c8d]"
                      }`}
                    >
                      {locationStatus}
                    </div>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#7f8c8d] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@arched.in"
                      className="w-full px-3 py-2.5 border border-[#e0e4e8] bg-[#fafbfc] focus:outline-none focus:border-[#2c3e50] text-[#1a1a1a]"
                    />
                  </div>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#555]">
                    <input
                      type="checkbox"
                      required
                      checked={formData.terms}
                      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                      className="mt-0.5"
                    />
                    <span>
                      I agree to the Terms, Competition Rules, and Data Privacy Policy of Arched India.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#2c3e50] hover:bg-[#1a252f] text-white text-xs font-semibold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Processing Registration..." : "Submit Registration"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
