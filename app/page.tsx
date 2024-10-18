export default function Home() {
  const members = [
    {
      name: '김건희',
      id: '91900625',
      role: '제작목적소개페이지',
      img: '/images/g.jpg',
    },
    {
      name: '김혜정',
      id: '92103781',
      role: '팀원소개페이지',
      img: '/images/h.png',
    },
    {
      name: '백서진',
      id: '92313386',
      role: '기능소개페이지',
      img: '/images/b.png',
    },
    {
      name: '정은미',
      id: '92313647',
      role: '메인페이지제작',
      img: '/images/e.jpg',
    },
  ]

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-center text-4xl font-bold mb-8">고양hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg text-center">
            <img
              src={member.img} // 여기에 이미지 경로 사용
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{member.name}</h2>
            <p>{member.id}</p>
            <p className="mb-4">{member.role}</p>
            <button className="bg-customButton text-white py-2 px-4 rounded">
              포트폴리오
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
