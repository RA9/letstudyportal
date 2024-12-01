export function AboutTab({ school }: { school: any }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Location</h2>
        <p>{school.location}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Education Level</h2>
        <p>{school.educationLevel}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Field of Study</h2>
        <p>{school.fieldOfStudy}</p>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Tuition Fees</h2>
        <p>${school.tuitionFees.toFixed(2)} per year</p>
      </div>
      {school.ranking && (
        <div>
          <h2 className="text-xl font-semibold">Ranking</h2>
          <p>{school.ranking}</p>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc list-inside">
          {school.hasScholarships && <li>Offers scholarships</li>}
          {school.hasOnlineCourses && <li>Offers online courses</li>}
          {school.isAccredited && <li>Accredited institution</li>}
        </ul>
      </div>
    </div>
  )
}

