// Course availability table data
const courseData = {
    // Japanese holidays for the current year
    holidays: {
        "2025-08-11": "山の日", // Mountain Day
        "2025-09-15": "敬老の日", // Respect for the Aged Day
        "2025-09-23": "秋分の日", // Autumn Equinox
        "2025-10-13": "体育の日", // Sports Day
        "2025-11-03": "文化の日", // Culture Day
        "2025-11-23": "勤労感謝の日", // Labor Thanksgiving Day
        "2025-12-23": "天皇誕生日", // Emperor's Birthday
    },
    courses: [
        {
            id: 1,
            name: "歓送迎会特別コース　【全10品】を3300円で♪",
            availability: {
                // Format: YYYY-MM-DD: boolean (true = available, false = not available)
                "2025-08-01": true,
                "2025-08-02": true,
                "2025-08-03": false,
                "2025-08-04": true,
                "2025-08-05": true,
                "2025-08-06": true,
                "2025-08-07": false,
                "2025-08-08": true,
                "2025-08-09": true,
                "2025-08-10": false,
                "2025-08-11": true,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 2,
            name: "博多豚焼肉食べ飲み放題コース♪",
            availability: {
                "2025-08-01": true,
                "2025-08-02": false,
                "2025-08-03": true,
                "2025-08-04": true,
                "2025-08-05": false,
                "2025-08-06": true,
                "2025-08-07": true,
                "2025-08-08": false,
                "2025-08-09": true,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": false,
                "2025-08-14": true,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 3,
            name: "サムギョプサル食べ飲み放題コース♪",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": true,
                "2025-08-07": false,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": true,
                "2025-08-12": false,
                "2025-08-13": true,
                "2025-08-14": true,
                "2025-08-15": false,
                // Add more dates as needed
            }
        },
        {
            id: 4,
            name: "全350種 最大３時間食べ飲み放題ゴールドコース",
            availability: {
                "2025-08-01": true,
                "2025-08-02": true,
                "2025-08-03": false,
                "2025-08-04": true,
                "2025-08-05": false,
                "2025-08-06": true,
                "2025-08-07": true,
                "2025-08-08": false,
                "2025-08-09": true,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 5,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 6,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 7,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 8,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 9,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 10,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 11,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        {
            id: 12,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        },
        ,
        {
            id: 13,
            name: "★オープン記念★赤字覚悟の大勝負！23時からの特別コース",
            availability: {
                "2025-08-01": false,
                "2025-08-02": true,
                "2025-08-03": true,
                "2025-08-04": false,
                "2025-08-05": true,
                "2025-08-06": false,
                "2025-08-07": true,
                "2025-08-08": true,
                "2025-08-09": false,
                "2025-08-10": true,
                "2025-08-11": false,
                "2025-08-12": true,
                "2025-08-13": true,
                "2025-08-14": false,
                "2025-08-15": true,
                // Add more dates as needed
            }
        }
    ],
    // Add more data fields as needed
};

export default courseData;
