import { Camera } from 'lucide-react'
import { useRef, useState } from 'react'
import ProfileField from './ProfileField.jsx'
import { User, Mail, CalendarDays } from 'lucide-react'
import defaultImg from '../assets/images/logo.png'
import { useAuth } from '../data/authStore'

export default function ProfileCard() {
  const fileInputRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const { user } = useAuth()

  const displayName = user?.name || user?.fullName || 'Ananya Sharma'
  const displayEmail = user?.email || 'ananya.sharma@email.com'
  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : 'May 15, 2024'

  const handleCameraClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setPreview(ev.target.result)
      }
      reader.readAsDataURL(file)
    }
    e.target.value = ''
  }

  return (
    <div className="rounded-2xl border border-[#E9D8B8] bg-white p-6 shadow-soft md:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-serif text-[22px] font-bold text-[#0B2348] md:text-[26px]">
          My Profile
        </h2>
        <p className="mt-1 text-[13.5px] text-[#0B2348]/50">
          Manage your personal information
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Profile Image */}
        <div className="flex shrink-0 justify-center lg:justify-start">
          <div className="relative">
            <div className="h-36 w-36 overflow-hidden rounded-full border-[3px] border-[#C47A0A]/40 shadow-soft md:h-44 md:w-44">
              {preview ? (
                <img src={preview} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <img src={defaultImg} alt="Profile" className="h-full w-full object-contain" />
              )}
            </div>
            <button
              onClick={handleCameraClick}
              className="absolute bottom-1 right-1 grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-gold-gradient text-white shadow-md transition-transform hover:scale-105"
              aria-label="Change profile picture"
            >
              <Camera size={15} strokeWidth={2} />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Profile Fields */}
        <div className="flex-1 min-w-0">
          <ProfileField
            icon={User}
            label="Full Name"
            value={displayName}
          />
          <ProfileField
            icon={Mail}
            label="Email Address"
            value={displayEmail}
            type="email"
          />
          <ProfileField
            icon={CalendarDays}
            label="Member Since"
            value={memberSince}
          />
        </div>
      </div>
    </div>
  )
}
