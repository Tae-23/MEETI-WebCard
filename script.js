//  URLから情報を取得する
const params = new URLSearchParams(window.location.search);

// 名前を取得
const name = params.get("name");

// MBTIを取得
const mbti = params.get("mbti");

// 趣味を取得
const interests = params.get("interests");

// HTMLの名前を書き換える
if (participantName) {
    document.getElementById("name").textContent = participantName;
}

// HTMLのMBTIを書き換える
if (mbti) {
    document.getElementById("mbti").textContent = mbti;
}

// HTMLの趣味を書き換える
if (interests) {

    const interestsList = interests.split(",");

    const interestsElement = document.getElementById("interests");

    interestsElement.innerHTML = "";

    interestsList.forEach(function(interests) {

        const span = document.createElement("span");

        span.textContent = interests;

        interestsElement.appendChild(span);

    });

}

