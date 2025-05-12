/***sign in_page設定***/
  
    // フォーム送信時の処理
    document.getElementById("signupForm").addEventListener("submit", function(event) {
        event.preventDefault(); // フォームのデフォルト送信を防ぐ
        const name = document.getElementById("name").value;
        const userID = document.getElementById("userID").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const errorMessage = document.getElementById("error-message");
        
        // 半角英数字のチェック
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    
        // フォームバリデーション
          /* 全ての項目が入力されていない場合 */ 
          if (!name || !userID || !password || !confirmPassword) {
              errorMessage.textContent = "全ての項目を入力してください。";
          /* すべての項目が半角英数字で入力されているか検査 */
          } else if (!alphanumericRegex.test(name) || !alphanumericRegex.test(userID) || !alphanumericRegex.test(password) || !alphanumericRegex.test(confirmPassword)) {
              errorMessage.textContent = "全ての項目は半角英数字のみを使用してください。";
          /* パスワードと確認フォームの文字列が違う */
          } else if (password !== confirmPassword) {
              errorMessage.textContent = "パスワードと確認用パスワードが一致しません。";
          /* 入力項目に間違い、不備がない場合 */
          } else {
              errorMessage.textContent = ""; 
              alert("登録が完了しました！"); // 登録完了時のテキスト
              
              
              // 登録処理をここに実装
          }
    });
    
    
    /***forgotページ***/

        // フォーム送信時の処理
        document.getElementById("resetPass").addEventListener("submit", function(event) {
            event.preventDefault(); // フォームのデフォルト送信を防ぐ

            const name = document.getElementById("name").value;
            const userID = document.getElementById("userID").value;
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const errorMessage = document.getElementById("error_message");

            // 半角英数字のチェック
            const alphanumericRegex = /^[a-zA-Z0-9]+$/;

            // フォームバリデーション
            /* 全ての項目が入力されていない場合 */
            if (!name || !userID || !newPassword || !confirmPassword) {
                errorMessage.textContent = "全ての項目を入力してください。";
            /* すべての項目が半角英数字で入力されているか検査 */
            } else if (!alphanumericRegex.test(name) || !alphanumericRegex.test(userID) || !alphanumericRegex.test(newPassword) || !alphanumericRegex.test(confirmPassword)) {
                errorMessage.textContent = "全ての項目は半角英数字のみを使用してください。";
            /* パスワードと確認フォームの文字列が違う */
            } else if (newPassword !== confirmPassword) {
                errorMessage.textContent = "新しいパスワードと確認用パスワードが一致しません。";
            /* 入力項目に間違い、不備がない場合 */
            } else {
                errorMessage.textContent = ""; 
                alert("パスワードがリセットされました！"); // 完了時のテキスト
                
                // パスワードリセット処理をここに実装
            }
        });


    
        /* 変更ボタンクリックで変更内容を送信,送信完了メッセージを表示 */
        let button = document.getElementById("confirmedBtn");
        button.addEventListener("click", function(){window.alert("送信が完了しました。")});
    
    
    
    /*****mainpage*****/
    
    let sliderIndex = 0; // スライダーの現在の位置
    const totalImages = document.querySelectorAll('.slider_track img').length;
    const imagesToShow = 2;
    const imageWidth = 250 + 30 * 2; // 画像幅,両サイドのマージン
    const sliderTrack = document.querySelector('.slider_track');
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (sliderIndex < totalImages - imagesToShow) {
            sliderIndex++;
        } else {
            sliderIndex = 0; // 最初に戻る
        }
        updateSliderPosition();
    });
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (sliderIndex > 0) {
            sliderIndex--;
        } else {
            sliderIndex = totalImages - imagesToShow; // 最後に戻る
        }
        updateSliderPosition();
    });
    
    function updateSliderPosition() {
        sliderTrack.style.transform = `translateX(-${sliderIndex * imageWidth}px)`;
    }
    
    // 自動スライド
    setInterval(() => {
        sliderIndex++;
        if (sliderIndex > totalImages - imagesToShow) {
            sliderIndex = 0; // 最初に戻る
        }
        updateSliderPosition();
    }, 2000);
    
    
    
    
    
    /*****profilepage*****/
    
    
    /* passの表示非.表示 */
    document.getElementById("togglePassword").addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const currentType = passwordInput.getAttribute("type");
    
      /* パスワードの表示・非表示を切り替える */
      if (currentType === "password") {
          passwordInput.setAttribute("type", "text");
          this.textContent = "✖️"; /* アイコンを変更 */
      } else {
          passwordInput.setAttribute("type", "password");
          this.textContent = "👁️‍🗨️"; /* アイコンを元に戻す */
      }
    });
    
    
        
      
     // 年齢入力フィールドをクリックした時の動作
     // 年齢入力フィールドをクリックした時の動作
        ageInput.addEventListener('click', function() {
          ageMenu.style.display = (ageMenu.style.display === 'none' || ageMenu.style.display === '') ? 'block' : 'none';
        });
      
        // メニュー外をクリックしたらメニューを閉じる
        document.addEventListener('click', function(event) {
          if (!event.target.closest('.age-dropdown')) {
            ageMenu.style.display = 'none';
          }
        });
      
      
    
        /* 難しすぎるので一時中断 */
    
        document.addEventListener("DOMContentLoaded", () => {
          const teachSection = document.getElementById("teach_section");
      
          /* 監視対象: teach_inputクラス
             目的: インプットが最大数に達したときに新しいフォームを追加 */      function addTeachInput() {
              const teachInputs = document.querySelectorAll(".teach_input");
              const maxInputs = teachInputs.length;
      
              /* 全てのインプットに値が入っているか確認 */
              const allFilled = Array.from(teachInputs).every(input => input.value.trim() !== "");
              
              if (allFilled) {
                  const newInput = document.createElement("input");
                  newInput.type = "text";
                  newInput.className = "teach_input";
                  newInput.placeholder = `教えることが可能な料理を入力してください (最大${maxInputs + 1}つ)`;
                  teachSection.appendChild(newInput);
              }
          }
      
          /* teach_section内のインプットにイベントリスナーを設定 */
          teachSection.addEventListener("input", addTeachInput);
      });
      
    /* messagepage */


     // ハンバーガーメニューのクリックイベント
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('ms_user');

    hamburger.addEventListener('click', () => {
        const isDisplayed = window.getComputedStyle(navMenu).display !== 'none';
        navMenu.style.display = isDisplayed ? 'none' : 'block';
    });

    
    
    
    