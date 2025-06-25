// ... الاستيرادات السابقة
const [githubLinked, setGithubLinked] = useState(false);
const [githubUser, setGithubUser] = useState<string | null>(null);

const handleGithubLink = () => {
  if (!githubLinked) {
    // محاكاة OAuth
    setTimeout(() => {
      setGithubLinked(true);
      setGithubUser("Yahya0000000");
      alert("تم ربط حسابك مع GitHub بنجاح!");
    }, 1000);
  } else {
    setGithubLinked(false);
    setGithubUser(null);
  }
};

// ... داخل الكود
<div style={{marginBottom: 22}}>
  <label style={{color: "#0bf", fontWeight: "bold"}}>ربط مع GitHub:</label>
  <button
    onClick={handleGithubLink}
    style={{
      marginRight: 16,
      background: githubLinked ? "#119e57" : "#037cf9",
      color: "#fff",
      border: "none",
      borderRadius: 8,
      padding: "10px 22px",
      fontWeight: "bold",
      cursor: "pointer"
    }}
  >
    {githubLinked ? `تم الربط (${githubUser})` : "ربط الآن"}
  </button>
</div>