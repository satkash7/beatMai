<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Carbon; 

use Illuminate\Http\Request; 
use Exception;
use Facebook\Facebook;
use GuzzleHttp\Client;
use Abraham\TwitterOAuth\TwitterOAuth;
use Gemini;   
use Illuminate\Support\Facades\Log;


class Reusable extends Model
{
    use HasFactory;
    public function getUserInfoFromUsername($username, $info) {
        if ($username == "anonymous") {
            return 'anonymous';
        }
        $user = User::where('username', $username)->first(); // Search by username column
        if (!$user) {
            return 'anonymous';
        }
        return $info ? $user[$info] : $user['name'];
    }

    public function getUserInfoFromId($id, $info) {
        if($id == "0"){
            return 'anonymous';
        }
        $user = User::find($id);
        if (!$user) {
            return 'anonymous';
        }
        return $info ? $user[$info] : $user['name'];
    }
    

    public function getUsableDate($date){
        $dateTime = new \DateTime($date);
        // Format the date as desired (e.g., Sun, 10 Feb 2024)
        $formattedDate = $dateTime->format('D, d M Y');
        return $formattedDate;
    }

    public function getUserEmailVerificationToken($data) {
        return md5($data);
    }

    public function SendVerificationEmailTo($user) {
        $userEmail = $user['email'];
        $verificatioToken = $user['email_verification_token'];
        $names = $user['name'];
        // send the email for verification
        $message = "<!DOCTYPE html><html><body> <p>Dear " . $names . ",</p>
                    <p>Thank you for registering with us. Please verify your email address by clicking the button below:</p>
                    <a href='https://app.timephantom.com/email-verification?stoken=". $verificatioToken . "&umtsource=email&email=" . $userEmail . "st=time vf'>Verify Email</a>
                    <p>If you didn't create an account, please disregard this email.</p>
                    </br></br><small>If this link doesn't work, Copy and paste the link below in your browser : https://app.timephantom.com/email-verification?stoken=". $verificatioToken . "&umtsource=email&email=" . $userEmail . "st=time vf'
                    <p>Best regards,<br>Time Phantom Inc.</p></body></html>";
        // Send the email for verification
        $sent = Mail::raw($message, function ($message) use ($userEmail, $names) {
            $message->to($userEmail, $names)
                ->subject('Verify Your Email Address');
        });
        return $sent ? true : false;
    }

    public function getStatistics(){
        // USER STATISTICS
        $totalUsers = User::count();
    }


    public function detectGreetingLang($input) {
        $greetings = [
            'en' => [
                "hello", "hi", "hey", "morning", "good morning", "evening", "good evening", 
                "afternoon", "good afternoon", "hello, how are you doing?", "hello how are you doing?", 
                "hello. how are you doing?", "hello how are you doing", "hello. how are you doing", 
                "hello, how are you doing", "hello, how are you going?", "hello how are you going?", 
                "hello. how are you going?", "hello how are you going", "hello. how are you going", 
                "hello, how are you going", "hello, how are you?", "hello how are you?", 
                "hello. how are you?", "hello how are you", "hello. how are you", "hello, how are you", 
                "hello, how is it?", "hello how is it?", "hello. how is it?", "hello how is it", 
                "hello. how is it", "hello, how is it", "good day", "greetings", "howdy"
            ],
            'fr' => [
                "bonjour", "salut", "coucou", "bonsoir", "bonne matinée", "bonne soirée", 
                "bonne après-midi", "bonjour, comment ça va?", "bonjour comment ça va?", 
                "bonjour. comment ça va?", "bonjour comment ça va", "bonjour. comment ça va", 
                "bonjour, comment ça va", "bonjour, comment allez-vous?", "bonjour comment allez-vous?", 
                "bonjour. comment allez-vous?", "bonjour comment allez-vous", "bonjour. comment allez-vous", 
                "bonjour, comment allez-vous", "salut, comment ça va?", "salut comment ça va?", 
                "salut. comment ça va?", "salut comment ça va", "salut. comment ça va", 
                "salut, comment ça va", "salut, comment allez-vous?", "salut comment allez-vous?", 
                "salut. comment allez-vous?", "salut comment allez-vous", "salut. comment allez-vous", 
                "salut, comment allez-vous", "bonjour, comment ça se passe?", "salutations", "coucou, ça va?"
            ],
            'es' => [
                "hola", "buenos días", "buenas tardes", "buenas noches", "buen día", 
                "hola, ¿cómo estás?", "hola ¿cómo estás?", "hola. ¿cómo estás?", "hola ¿cómo estás", 
                "hola. ¿cómo estás", "hola, ¿cómo estás", "hola, ¿cómo te va?", "hola ¿cómo te va?", 
                "hola. ¿cómo te va?", "hola ¿cómo te va", "hola. ¿cómo te va", "hola, ¿cómo te va", 
                "hola, ¿qué tal?", "hola ¿qué tal?", "hola. ¿qué tal?", "hola ¿qué tal", 
                "hola. ¿qué tal", "hola, ¿qué tal", "buenos días, ¿cómo estás?", "buenos días ¿cómo estás?", 
                "buenos días. ¿cómo estás?", "buenos días ¿cómo estás", "buenos días. ¿cómo estás", 
                "buenos días, ¿cómo estás", "saludos", "¿qué onda?", "¿qué hay?"
            ],
            'de' => [
                "hallo", "hi", "guten Morgen", "guten Tag", "guten Abend", "gute Nacht", 
                "hallo, wie geht's?", "hallo wie geht's?", "hallo. wie geht's?", "hallo wie geht's", 
                "hallo. wie geht's", "hallo, wie geht's", "hallo, wie geht es Ihnen?", "hallo wie geht es Ihnen?", 
                "hallo. wie geht es Ihnen?", "hallo wie geht es Ihnen", "hallo. wie geht es Ihnen", 
                "hallo, wie geht es Ihnen", "grüß dich", "servus", "moin"
            ],
            'it' => [
                "ciao", "buongiorno", "buonasera", "buonanotte", "salve", 
                "ciao, come stai?", "ciao come stai?", "ciao. come stai?", "ciao come stai", 
                "ciao. come stai", "ciao, come stai", "ciao, come va?", "ciao come va?", 
                "ciao. come va?", "ciao come va", "ciao. come va", "ciao, come va", 
                "buona giornata", "buon pomeriggio", "saluti"
            ],
            'pt' => [
                "olá", "oi", "bom dia", "boa tarde", "boa noite", 
                "olá, como você está?", "olá como você está?", "olá. como você está?", "olá como você está", 
                "olá. como você está", "olá, como você está", "olá, como vai?", "olá como vai?", 
                "olá. como vai?", "olá como vai", "olá. como vai", "olá, como vai", 
                "bom dia, como você está?", "bom dia como você está?", "bom dia. como você está?", 
                "bom dia como você está", "bom dia. como você está", "bom dia, como você está", 
                "saudações", "tudo bem?"
            ],
            'nl' => [
                "hallo", "hoi", "goede morgen", "goedemiddag", "goedenavond", "goede nacht", 
                "hallo, hoe gaat het?", "hallo hoe gaat het?", "hallo. hoe gaat het?", "hallo hoe gaat het", 
                "hallo. hoe gaat het", "hallo, hoe gaat het", "hallo, hoe gaat het met jou?", "hallo hoe gaat het met jou?", 
                "hallo. hoe gaat het met jou?", "hallo hoe gaat het met jou", "hallo. hoe gaat het met jou", 
                "hallo, hoe gaat het met jou", "groeten", "goedendag", "hoe is het?"
            ],
            'ru' => [
                "здравствуйте", "привет", "доброе утро", "добрый день", "добрый вечер", "доброй ночи", 
                "привет, как дела?", "привет как дела?", "привет. как дела?", "привет как дела", 
                "привет. как дела", "привет, как дела", "здравствуйте, как ваши дела?", "здравствуйте как ваши дела?", 
                "здравствуйте. как ваши дела?", "здравствуйте как ваши дела", "здравствуйте. как ваши дела", 
                "здравствуйте, как ваши дела", "приветствую", "добрый день", "как поживаете?"
            ],
            'zh' => [
                "你好", "嗨", "早上好", "下午好", "晚上好", 
                "你好，你好吗?", "你好 你好吗?", "你好。你好吗?", "你好 你好吗", 
                "你好。你好吗", "你好，你好吗", "你好，你过得怎么样?", "你好 你过得怎么样?", 
                "你好。你过得怎么样?", "你好 你过得怎么样", "你好。你过得怎么样", "你好，你过得怎么样", 
                "您好", "问候", "早安"
            ],
            'ja' => [
                "こんにちは", "やあ", "おはよう", "こんばんは", "おやすみなさい", 
                "こんにちは、お元気ですか?", "こんにちは お元気ですか?", "こんにちは。お元気ですか?", "こんにちは お元気ですか", 
                "こんにちは。お元気ですか", "こんにちは、お元気ですか", "こんにちは、調子はどうですか?", "こんにちは 調子はどうですか?", 
                "こんにちは。調子はどうですか?", "こんにちは 調子はどうですか", "こんにちは。調子はどうですか", "こんにちは、調子はどうですか", 
                "おはようございます", "ご機嫌いかがですか", "元気ですか"
            ],
            'ar' => [
                "مرحبا", "أهلاً", "صباح الخير", "مساء الخير", "ليلة سعيدة", 
                "مرحبا، كيف حالك؟", "مرحبا كيف حالك؟", "مرحبا. كيف حالك؟", "مرحبا كيف حالك", 
                "مرحبا. كيف حالك", "مرحبا، كيف حالك", "مرحبا، كيف تسير الأمور؟", "مرحبا كيف تسير الأمور؟", 
                "مرحبا. كيف تسير الأمور؟", "مرحبا كيف تسير الأمور", "مرحبا. كيف تسير الأمور", "مرحبا، كيف تسير الأمور", 
                "تحية طيبة", "نهارك سعيد", "كيف الحال؟"
            ],
        ];
    
        foreach ($greetings as $lang => $greetList) {
            foreach ($greetList as $greet) {
                if (stripos($input, $greet) !== false) {
                    if ($lang == 'en') {
                        return "Hello, I am <span class='text-blue-500'>Everly ai</span>, I am here to help you find the best AI tools for your need! How can I help you today?";
                    } else if ($lang == 'fr') {
                        return "Bonjour, je suis <span class='text-blue-500'>Everly ai</span>, je suis ici pour vous aider à trouver les meilleurs outils d'IA pour vos besoins ! Comment puis-je vous aider aujourd'hui ?";
                    } else if ($lang == 'es') {
                        return "Hola, soy <span class='text-blue-500'>Everly ai</span>, estoy aquí para ayudarte a encontrar las mejores herramientas de IA para tus necesidades. ¿Cómo puedo ayudarte hoy?";
                    } else if ($lang == 'de') {
                        return "Hallo, ich bin <span class='text-blue-500'>Everly ai</span>, ich bin hier, um Ihnen zu helfen, die besten KI-Tools für Ihre Bedürfnisse zu finden! Wie kann ich Ihnen heute helfen?";
                    } else if ($lang == 'it') {
                        return "Ciao, sono <span class='text-blue-500'>Everly ai</span>, sono qui per aiutarti a trovare i migliori strumenti AI per le tue esigenze! Come posso aiutarti oggi?";
                    } else if ($lang == 'pt') {
                        return "Olá, eu sou <span class='text-blue-500'>Everly ai</span>, estou aqui para ajudar você a encontrar as melhores ferramentas de IA para suas necessidades! Como posso ajudar você hoje?";
                    } else if ($lang == 'nl') {
                        return "Hallo, ik ben <span class='text-blue-500'>Everly ai</span>, ik ben hier om je te helpen de beste AI-tools voor jouw behoeften te vinden! Hoe kan ik je vandaag helpen?";
                    } else if ($lang == 'ru') {
                        return "Здравствуйте, я <span class='text-blue-500'>Everly ai</span>, я здесь, чтобы помочь вам найти лучшие AI-инструменты для ваших нужд! Как я могу вам помочь сегодня?";
                    } else if ($lang == 'zh') {
                        return "你好，我是 <span class='text-blue-500'>Everly ai</span>，我在这里帮助你找到最适合你需求的 AI 工具！我今天可以怎么帮助你？";
                    } else if ($lang == 'ja') {
                        return "こんにちは、私は <span class='text-blue-500'>Everly ai</span> です。あなたのニーズに最適なAIツールを見つけるお手伝いをしています！今日はどのようにお手伝いできますか？";
                    } else if ($lang == 'ar') {
                        return "مرحباً، أنا <span class='text-blue-500'>Everly ai</span>، أنا هنا لمساعدتك في العثور على أفضل أدوات الذكاء الاصطناعي لاحتياجاتك! كيف يمكنني مساعدتك اليوم؟";
                    }  
                }
            }
        }
        return "no";
    }


    public function detectWhoisQuestion($input) {
        $whoisQuestion = [
            'en' => [
                "who are you", "who are you?", "who ar you", "who ar you?", "who are u", "who are u?",
                "who is you", "who is you?", "who developed you", "who developed you?", 
                "who is your developer", "who is your developer?", "who's your developer", "who's your developer?",
                "who is ur developer", "who is ur developer?", "who created you", "who created you?",
                "who is your creator", "who is your creator?", "who's your creator", "who's your creator?",
                "who is ur creator", "who is ur creator?", "who owns you", "who owns you?",
                "who is your owner", "who is your owner?", "who's your owner", "who's your owner?",
                "who is ur owner", "who is ur owner?"
            ],
            'fr' => [
                "qui es-tu", "qui es-tu?", "qui êtes-vous", "qui êtes-vous?", "qui t'a créé", "qui t'a créé?",
                "qui est ton créateur", "qui est ton créateur?", "qui vous a développé", "qui vous a développé?",
                "qui est ton développeur", "qui est ton développeur?", "qui est ton propriétaire", "qui est ton propriétaire?"
            ],
            'es' => [
                "quién eres tú", "quién eres tú?", "quién eres", "quién eres?", "quién te creó", "quién te creó?",
                "quién es tu creador", "quién es tu creador?", "quién te desarrolló", "quién te desarrolló?",
                "quién es tu desarrollador", "quién es tu desarrollador?", "quién es tu dueño", "quién es tu dueño?"
            
            ],
            'de' => [
                "wer bist du", "wer bist du?", "wer sind Sie", "wer sind Sie?", "wer hat dich entwickelt", "wer hat dich entwickelt?",
                "wer ist dein Entwickler", "wer ist dein Entwickler?", "wer hat dich erschaffen", "wer hat dich erschaffen?",
                "wer ist dein Schöpfer", "wer ist dein Schöpfer?", "wem gehörst du", "wem gehörst du?"
            
            ],
            'it' => [
                "chi sei", "chi sei?", "chi ti ha creato", "chi ti ha creato?", "chi è il tuo creatore", "chi è il tuo creatore?",
                "chi ti ha sviluppato", "chi ti ha sviluppato?", "chi è il tuo sviluppatore", "chi è il tuo sviluppatore?",
                "chi è il tuo proprietario", "chi è il tuo proprietario?"
            ],
            'pt' => [
                "quem é você", "quem é você?", "quem te criou", "quem te criou?", "quem é seu criador", "quem é seu criador?",
                "quem te desenvolveu", "quem te desenvolveu?", "quem é seu desenvolvedor", "quem é seu desenvolvedor?",
                "quem é seu dono", "quem é seu dono?"
            ],
            'nl' => [
                "wie ben jij", "wie ben jij?", "wie bent u", "wie bent u?", "wie heeft jou gemaakt", "wie heeft jou gemaakt?",
                "wie is jouw maker", "wie is jouw maker?", "wie heeft jou ontwikkeld", "wie heeft jou ontwikkeld?",
                "wie is jouw ontwikkelaar", "wie is jouw ontwikkelaar?", "wie is jouw eigenaar", "wie is jouw eigenaar?"
            
            ],
            'ru' => [
                "кто ты", "кто ты?", "кто вы", "кто вы?", "кто тебя создал", "кто тебя создал?",
                "кто твой создатель", "кто твой создатель?", "кто тебя разработал", "кто тебя разработал?",
                "кто твой разработчик", "кто твой разработчик?", "кто твой владелец", "кто твой владелец?"
            
            ],
            'zh' => [
                "你是谁", "你是谁?", "谁开发了你", "谁开发了你?", "谁是你的开发者", "谁是你的开发者?",
                "谁创造了你", "谁创造了你?", "谁是你的创造者", "谁是你的创造者?", "谁拥有你", "谁拥有你?"
            
            ],
            'ja' => [
                "あなたは誰", "あなたは誰?", "誰があなたを開発した", "誰があなたを開発した?", "あなたの開発者は誰", "あなたの開発者は誰?",
                "誰があなたを作った", "誰があなたを作った?", "あなたの所有者は誰", "あなたの所有者は誰?"
            
            ],
            'ar' => [
                "من أنت", "من أنت؟", "من طورك", "من طورك؟", "من هو مطورك", "من هو مطورك؟",
                "من أنشأك", "من أنشأك؟", "من هو خالقك", "من هو خالقك؟", "من يملكك", "من يملكك؟"
            ],
        ];
    
        foreach ($whoisQuestion as $lang => $whoisList) {
            foreach ($whoisList as $who) {
                if (stripos($input, $who) !== false) {
                    // en,fr,es,de,it,pt,nl,ru,zh,ja,ar
                    if ($lang == 'en') { 
                        return "I am <span class='text-blue-500'>everly ai</span>, an AI tool developed by everlytools.com. I help AI lovers to easily find the best AI tools for a specific need in different areas, technologies, studies, and/or activities. I am trained to respond in multiple languages.";     
                    } else if ($lang == 'fr') {
                        return "Je suis <span class='text-blue-500'>everly ai</span>, un outil d'IA développé par everlytools.com. J'aide les amateurs d'IA à trouver facilement les meilleurs outils d'IA pour un besoin spécifique dans différents domaines, technologies, études et/ou activités. Je suis formé pour répondre en plusieurs langues.";
                    } else if ($lang == 'es') {
                        return "Soy <span class='text-blue-500'>everly ai</span>, una herramienta de IA desarrollada por everlytools.com. Ayudo a los amantes de la IA a encontrar fácilmente las mejores herramientas de IA para una necesidad específica en diferentes áreas, tecnologías, estudios y/o actividades. Estoy entrenado para responder en varios idiomas.";
                    } else if ($lang == 'de') {
                        return "Ich bin <span class='text-blue-500'>everly ai</span>, ein KI-Tool entwickelt von everlytools.com. Ich helfe KI-Liebhabern, die besten KI-Tools für einen bestimmten Bedarf in verschiedenen Bereichen, Technologien, Studien und/oder Aktivitäten leicht zu finden. Ich bin darauf trainiert, in mehreren Sprachen zu antworten.";
                    } else if ($lang == 'it') {
                        return "Sono <span class='text-blue-500'>everly ai</span>, uno strumento AI sviluppato da everlytools.com. Aiuto gli appassionati di AI a trovare facilmente i migliori strumenti AI per una necessità specifica in diverse aree, tecnologie, studi e/o attività. Sono addestrato a rispondere in più lingue.";
                    } else if ($lang == 'pt') {
                        return "Eu sou <span class='text-blue-500'>everly ai</span>, uma ferramenta de IA desenvolvida por everlytools.com. Eu ajudo os amantes da IA a encontrar facilmente as melhores ferramentas de IA para uma necessidade específica em diferentes áreas, tecnologias, estudos e/ou atividades. Estou treinado para responder em vários idiomas.";
                    } else if ($lang == 'nl') {
                        return "Ik ben <span class='text-blue-500'>everly ai</span>, een AI-tool ontwikkeld door everlytools.com. Ik help AI-liefhebbers gemakkelijk de beste AI-tools te vinden voor een specifieke behoefte in verschillende gebieden, technologieën, studies en/of activiteiten. Ik ben getraind om in meerdere talen te antwoorden.";
                    } else if ($lang == 'ru') {
                        return "Я <span class='text-blue-500'>everly ai</span>, инструмент ИИ, разработанный everlytools.com. Я помогаю любителям ИИ легко находить лучшие инструменты ИИ для конкретной потребности в различных областях, технологиях, исследованиях и/или видах деятельности. Я обучен отвечать на нескольких языках.";
                    } else if ($lang == 'zh') {
                        return "我是 <span class='text-blue-500'>everly ai</span>，由 everlytools.com 开发的 AI 工具。我帮助 AI 爱好者轻松找到不同领域、技术、研究和/或活动中特定需求的最佳 AI 工具。我接受过多语言回答的训练。";
                    } else if ($lang == 'ja') {
                       return "私は <span class='text-blue-500'>everly ai</span> です、everlytools.com によって開発された AI ツールです。私は、AI 愛好者が異なる分野、技術、研究および/または活動において特定のニーズに最適な AI ツールを簡単に見つけるのを助けます。私は複数の言語で応答するように訓練されています。";
                    } else if ($lang == 'ar') {
                       return "أنا <span class='text-blue-500'>everly ai</span>، أداة ذكاء اصطناعي تم تطويرها بواسطة everlytools.com. أساعد محبي الذكاء الاصطناعي في العثور بسهولة على أفضل أدوات الذكاء الاصطناعي لتلبية احتياجات معينة في مجالات وتقنيات ودراسات وأنشطة مختلفة. أنا مدرب على الرد بعدة لغات.";
                    }  
                }
            }
        }
        return "no"; 
      }

      public function userInputIsRelevantQuestion($input) {

        //QUERY PARAMETERS 
        // English
        $query_parameter_zero_en = "Please answer clearly and explain as much as you can";
        $query_parameter_one_en = "Also make sure to provide useful and valid (correct) links in your response,";
        $query_parameter_two_en = "here is my question :";

        // French
        $query_parameter_zero_fr = "Veuillez répondre clairement et expliquer autant que possible";
        $query_parameter_one_fr = "Assurez-vous également de fournir des liens utiles et correct dans votre réponse,";
        $query_parameter_two_fr = "voici ma question :";

        // Spanish
        $query_parameter_zero_es = "Por favor, responda con claridad y explique todo lo que pueda";
        $query_parameter_one_es = "Asegúrese también de proporcionar enlaces útiles y válidos (correctos) en su respuesta,";
        $query_parameter_two_es = "aquí está mi pregunta :";

        // German
        $query_parameter_zero_de = "Bitte antworten Sie klar und erklären Sie so viel wie möglich";
        $query_parameter_one_de = "Stellen Sie außerdem sicher, dass Sie in Ihrer Antwort nützliche und gültige (korrekte) Links angeben,";
        $query_parameter_two_de = "hier ist meine Frage :";

        // Italian
        $query_parameter_zero_it = "Per favore rispondi chiaramente e spiega il più possibile";
        $query_parameter_one_it = "Assicurati inoltre di fornire link utili e validi (corretti) nella tua risposta,";
        $query_parameter_two_it = "qui c'è la mia domanda :";

        // Portuguese
        $query_parameter_zero_pt = "Por favor, responda claramente e explique o máximo que puder";
        $query_parameter_one_pt = "Certifique-se também de que fornece links úteis e válidos (corretos) na sua resposta,";
        $query_parameter_two_pt = "aqui está minha pergunta :";

        // Dutch
        $query_parameter_zero_nl = "Beantwoord alstublieft duidelijk en leg zoveel mogelijk uit";
        $query_parameter_one_nl = "Zorg er ook voor dat u nuttige en geldige (correcte) links in uw antwoord opneemt,";
        $query_parameter_two_nl = "hier is mijn vraag :";

        // Russian
        $query_parameter_zero_ru = "Пожалуйста, ответьте ясно и объясните как можно больше";
        $query_parameter_one_ru = "Также обязательно укажите в своем ответе полезные и действительные (правильные) ссылки,";
        $query_parameter_two_ru = "вот мой вопрос :";

        // Chinese (Simplified)
        $query_parameter_zero_zh = "请清楚回答并尽量解释";
        $query_parameter_one_zh = "另外，请确保在您的回复中提供有用且有效（正确）的链接，";
        $query_parameter_two_zh = "这是我的问题：";

        // Japanese
        $query_parameter_zero_ja = "明確に回答し、できるだけ多く説明してください";
        $query_parameter_one_ja = "また、回答には必ず有用かつ有効な（正しい）リンクを記載してください。";
        $query_parameter_two_ja = "ここに私の質問があります：";

        // Arabic
        $query_parameter_zero_ar = "يرجى الرد بوضوح وشرح قدر ما تستطيع";
        $query_parameter_one_ar = "تأكد أيضًا من تقديم روابط مفيدة وصالحة (صحيحة) في ردك،";
        $query_parameter_two_ar = "إليك سؤالي :";


        // check input relevance
        $isUserInputRelevant = [
            'en' => [
                'ai', 'need', 'want', 'would', 'can', 'could', 'please', 'help', 'tool', 
                'website', 'wensotes', 'model', 'give me', 'give', 'tell', 'tell me', "I'd",
                'how', 'should', 'why', 'what', 'where', 'when', 'which', 'find', 'show', 
                'recommend', 'suggest', 'advise', 'best', 'top', 'list', 'example', 'examples', 
                'method', 'guide', 'tutorial', 'steps', 'process', 'solution', 'tips', 
                'strategy', 'strategies', 'idea', 'ideas', 'resources', 'information', 
                'details', 'explain', 'explanation', 'understand', 'clarify', 'insight', 
                'overview', 'review', 'instructions', 'support', 'assist', 'assistance', 
                'examples', 'compare', 'comparison', 'ways', 'methods', 'techniques', 
                'approach', 'approaches', 'options', 'alternatives', 'explanation', 
                'walkthrough', 'processes', 'framework', 'plan', 'plans', 'propose', 
                'proposals', 'information', 'details', 'features', 'benefits', 'advantages', 
                'disadvantages', 'pros', 'cons', 'worth', 'value', 'importance', 'impact', 
                'effect', 'effects', 'results', 'outcomes', 'feedback', 'inputs', 'responses', 
                'opinion', 'opinions', 'suggestion', 'suggestions', 'tips', 'hints', 
                'solutions', 'problem', 'issue', 'issues', 'problem-solving', 'troubleshoot', 
                'troubleshooting', 'fix', 'fixes', 'resolve', 'resolving', 'address', 
                'addressing', 'deal with', 'dealing with', 'handle', 'handling',
            ],
            'fr' => [
                'intelligence artificielle', 'besoin', 'vouloir', 'voudrais', 'peux', 'pourrais', 's\'il vous plaît', 'aide', 'outil', 
                'site web', 'wensotes', 'modèle', 'donne-moi', 'donner', 'dire', 'dis-moi', 'je voudrais',
                'comment', 'devrait', 'pourquoi', 'quoi', 'où', 'quand', 'lequel', 'trouver', 'montrer', 
                'recommander', 'suggérer', 'conseiller', 'meilleur', 'top', 'liste', 'exemple', 'exemples', 
                'méthode', 'guide', 'tutoriel', 'étapes', 'processus', 'solution', 'conseils', 
                'stratégie', 'stratégies', 'idée', 'idées', 'ressources', 'information', 
                'détails', 'expliquer', 'explication', 'comprendre', 'clarifier', 'aperçu', 
                'revue', 'instructions', 'soutien', 'assister', 'assistance', 
                'exemples', 'comparer', 'comparaison', 'façons', 'méthodes', 'techniques', 
                'approche', 'approches', 'options', 'alternatives', 'explication', 
                'guide pratique', 'processus', 'cadre', 'plan', 'plans', 'proposer', 
                'propositions', 'information', 'détails', 'caractéristiques', 'avantages', 
                'désavantages', 'pour', 'contre', 'valeur', 'importance', 'impact', 
                'effet', 'effets', 'résultats', 'conséquences', 'retour', 'entrées', 'réponses', 
                'opinion', 'opinions', 'suggestion', 'suggestions', 'conseils', 'indices', 
                'solutions', 'problème', 'problème', 'résolution de problèmes', 'dépanner', 
                'dépannage', 'réparer', 'réparations', 'résoudre', 'résolution', 'adresse', 
                'traiter', 'gérer', 'gestion'
            ],
            'es' => [
                 // Spanish
                'inteligencia artificial', 'necesitar', 'querer', 'gustaría', 'puede', 'podría', 'por favor', 'ayuda', 'herramienta', 
                'sitio web', 'wensotes', 'modelo', 'dame', 'dar', 'decir', 'dime', 'me gustaría',
                'cómo', 'debería', 'por qué', 'qué', 'dónde', 'cuándo', 'cuál', 'encontrar', 'mostrar', 
                'recomendar', 'sugerir', 'aconsejar', 'mejor', 'top', 'lista', 'ejemplo', 'ejemplos', 
                'método', 'guía', 'tutorial', 'pasos', 'proceso', 'solución', 'consejos', 
                'estrategia', 'estrategias', 'idea', 'ideas', 'recursos', 'información', 
                'detalles', 'explicar', 'explicación', 'entender', 'aclarar', 'perspectiva', 
                'revisión', 'instrucciones', 'apoyo', 'asistir', 'asistencia', 
                'ejemplos', 'comparar', 'comparación', 'maneras', 'métodos', 'técnicas', 
                'enfoque', 'enfoques', 'opciones', 'alternativas', 'explicación', 
                'guía práctica', 'procesos', 'marco', 'plan', 'planes', 'proponer', 
                'propuestas', 'información', 'detalles', 'características', 'beneficios', 
                'ventajas', 'desventajas', 'pros', 'contras', 'valor', 'importancia', 'impacto', 
                'efecto', 'efectos', 'resultados', 'consecuencias', 'comentarios', 'entradas', 'respuestas', 
                'opinión', 'opiniones', 'sugerencia', 'sugerencias', 'consejos', 'pistas', 
                'soluciones', 'problema', 'problema', 'resolución de problemas', 'solucionar problemas', 
                'solución de problemas', 'arreglar', 'arreglos', 'resolver', 'resolviendo', 'dirección', 
                'manejar', 'gestión',  
            ],
            'de' => [
                'künstliche intelligenz', 'brauchen', 'wollen', 'möchte', 'kann', 'könnte', 'bitte', 'hilfe', 'werkzeug', 
                'website', 'wensotes', 'modell', 'gib mir', 'geben', 'sagen', 'sag mir', 'ich würde',
                'wie', 'sollte', 'warum', 'was', 'wo', 'wann', 'welche', 'finden', 'zeigen', 
                'empfehlen', 'vorschlagen', 'beraten', 'beste', 'top', 'liste', 'beispiel', 'beispiele', 
                'methode', 'leitfaden', 'tutorial', 'schritte', 'prozess', 'lösung', 'tipps', 
                'strategie', 'strategien', 'idee', 'ideen', 'ressourcen', 'information', 
                'details', 'erklären', 'erklärung', 'verstehen', 'klären', 'einblick', 
                'überblick', 'bewertung', 'anweisungen', 'unterstützung', 'helfen', 'hilfe', 
                'beispiele', 'vergleichen', 'vergleich', 'wege', 'methoden', 'techniken', 
                'ansatz', 'ansätze', 'optionen', 'alternativen', 'erklärung', 
                'schritt-für-schritt-anleitung', 'prozesse', 'rahmen', 'plan', 'pläne', 'vorschlagen', 
                'vorschläge', 'information', 'details', 'merkmale', 'vorteile', 
                'nachteile', 'vorteile', 'nachteile', 'wert', 'bedeutung', 'auswirkung', 
                'effekt', 'effekte', 'ergebnisse', 'auswirkungen', 'feedback', 'eingaben', 'antworten', 
                'meinung', 'meinungen', 'vorschlag', 'vorschläge', 'tipps', 'hinweise', 
                'lösungen', 'problem', 'problem', 'problemlösung', 'troubleshooting', 
                'problemlösung', 'reparieren', 'reparaturen', 'lösen', 'lösung', 'adresse', 
                'umgehen mit', 'umgang mit', 'handhaben', 'handhabung',  
            ],
            'it' => [
                'intelligenza artificiale', 'bisogno', 'volere', 'vorrei', 'può', 'potrebbe', 'per favore', 'aiuto', 'strumento', 
                'sito web', 'wensotes', 'modello', 'dammi', 'dare', 'dire', 'dimmi', 'vorrei',
                'come', 'dovrebbe', 'perché', 'cosa', 'dove', 'quando', 'quale', 'trovare', 'mostrare', 
                'raccomandare', 'suggerire', 'consigliare', 'migliore', 'top', 'lista', 'esempio', 'esempi', 
                'metodo', 'guida', 'tutorial', 'passaggi', 'processo', 'soluzione', 'consigli', 
                'strategia', 'strategie', 'idea', 'idee', 'risorse', 'informazioni', 
                'dettagli', 'spiegare', 'spiegazione', 'comprendere', 'chiarire', 'approfondimento', 
                'panoramica', 'recensione', 'istruzioni', 'supporto', 'assistere', 'assistenza', 
                'esempi', 'confrontare', 'confronto', 'modi', 'metodi', 'tecniche', 
                'approccio', 'approcci', 'opzioni', 'alternative', 'spiegazione', 
                'guida passo-passo', 'processi', 'quadro', 'piano', 'piani', 'proporre', 
                'proposte', 'informazioni', 'dettagli', 'caratteristiche', 'vantaggi', 
                'svantaggi', 'pro', 'contro', 'valore', 'importanza', 'impatto', 
                'effetto', 'effetti', 'risultati', 'conseguenze', 'feedback', 'input', 'risposte', 
                'opinione', 'opinioni', 'suggerimento', 'suggerimenti', 'consigli', 'suggerimenti', 
                'soluzioni', 'problema', 'problema', 'risoluzione dei problemi', 'risoluzione dei problemi', 
                'risoluzione dei problemi', 'riparare', 'riparazioni', 'risolvere', 'risoluzione', 'indirizzo', 
                'affrontare', 'gestire', 'gestione',  
            ],
            'pt' => [
                'inteligência artificial', 'preciso', 'quero', 'gostaria', 'pode', 'poderia', 'por favor', 'ajuda', 'ferramenta', 
                'site', 'wensotes', 'modelo', 'dê-me', 'dar', 'dizer', 'diga-me', 'eu gostaria',
                'como', 'deveria', 'por que', 'o que', 'onde', 'quando', 'qual', 'encontrar', 'mostrar', 
                'recomendar', 'sugerir', 'aconselhar', 'melhor', 'top', 'lista', 'exemplo', 'exemplos', 
                'método', 'guia', 'tutorial', 'passos', 'processo', 'solução', 'dicas', 
                'estratégia', 'estratégias', 'idéia', 'idéias', 'recursos', 'informação', 
                'detalhes', 'explicar', 'explicação', 'entender', 'esclarecer', 'insight', 
                'visão geral', 'revisão', 'instruções', 'suporte', 'ajudar', 'assistência', 
                'exemplos', 'comparar', 'comparação', 'maneiras', 'métodos', 'técnicas', 
                'abordagem', 'abordagens', 'opções', 'alternativas', 'explicação', 
                'guia passo a passo', 'processos', 'quadro', 'plano', 'planos', 'propor', 
                'propostas', 'informação', 'detalhes', 'características', 'benefícios', 
                'vantagens', 'desvantagens', 'prós', 'contras', 'valor', 'importância', 'impacto', 
                'efeito', 'efeitos', 'resultados', 'consequências', 'feedback', 'entradas', 'respostas', 
                'opinião', 'opiniões', 'sugestão', 'sugestões', 'dicas', 'dicas', 
                'soluções', 'problema', 'problema', 'resolução de problemas', 'solução de problemas', 
                'solução de problemas', 'reparar', 'reparos', 'resolver', 'resolução', 'endereço', 
                'lidar com', 'lidando com', 'manusear', 'manipulação',
            ],
            'nl' => [
               'kunstmatige intelligentie', 'nodig', 'wil', 'zou', 'kan', 'zou kunnen', 'alsjeblieft', 'help', 'hulpmiddel', 
                'website', 'wensotes', 'model', 'geef me', 'geven', 'vertellen', 'vertel me', 'ik zou',
                'hoe', 'zou moeten', 'waarom', 'wat', 'waar', 'wanneer', 'welke', 'vinden', 'laten zien', 
                'aanbevelen', 'voorstellen', 'adviseren', 'beste', 'top', 'lijst', 'voorbeeld', 'voorbeelden', 
                'methode', 'gids', 'tutorial', 'stappen', 'proces', 'oplossing', 'tips', 
                'strategie', 'strategieën', 'idee', 'ideeën', 'middelen', 'informatie', 
                'details', 'uitleggen', 'uitleg', 'begrijpen', 'verduidelijken', 'inzicht', 
                'overzicht', 'recensie', 'instructies', 'ondersteuning', 'helpen', 'bijstand', 
                'voorbeelden', 'vergelijken', 'vergelijking', 'manieren', 'methoden', 'technieken', 
                'benadering', 'benaderingen', 'opties', 'alternatieven', 'uitleg', 
                'stap-voor-stap gids', 'processen', 'raamwerk', 'plan', 'plannen', 'voorstellen', 
                'voorstellen', 'informatie', 'details', 'kenmerken', 'voordelen', 
                'nadelen', 'voordelen', 'nadelen', 'waarde', 'belang', 'impact', 
                'effect', 'effecten', 'resultaten', 'gevolgen', 'feedback', 'invoer', 'antwoorden', 
                'mening', 'meningen', 'suggestie', 'suggesties', 'tips', 'aanwijzingen', 
                'oplossingen', 'probleem', 'probleem', 'probleemoplossing', 'troubleshooting', 
                'probleemoplossing', 'repareren', 'reparaties', 'oplossen', 'oplossing', 'adres', 
                'omgaan met', 'omgaan met', 'afhandelen', 'afhandeling',    
            ],
            'ru' => [
                'искусственный интеллект', 'нужно', 'хочу', 'бы', 'может', 'мог бы', 'пожалуйста', 'помощь', 'инструмент', 
                'веб-сайт', 'вэнсотес', 'модель', 'дай мне', 'дать', 'рассказать', 'скажи мне', 'я бы',
                'как', 'должен', 'почему', 'что', 'где', 'когда', 'который', 'найти', 'показать', 
                'рекомендовать', 'предложить', 'советовать', 'лучший', 'топ', 'список', 'пример', 'примеры', 
                'метод', 'руководство', 'учебник', 'шаги', 'процесс', 'решение', 'советы', 
                'стратегия', 'стратегии', 'идея', 'идеи', 'ресурсы', 'информация', 
                'подробности', 'объяснить', 'объяснение', 'понимать', 'прояснить', 'взгляд', 
                'обзор', 'обзор', 'инструкции', 'поддержка', 'помогать', 'помощь', 
                'примеры', 'сравнивать', 'сравнение', 'способы', 'методы', 'техники', 
                'подход', 'подходы', 'варианты', 'альтернативы', 'объяснение', 
                'пошаговое руководство', 'процессы', 'рамки', 'план', 'планы', 'предложить', 
                'предложения', 'информация', 'подробности', 'особенности', 'преимущества', 
                'недостатки', 'плюсы', 'минусы', 'ценность', 'важность', 'влияние', 
                'эффект', 'эффекты', 'результаты', 'последствия', 'обратная связь', 'вводы', 'ответы', 
                'мнение', 'мнения', 'предложение', 'предложения', 'советы', 'подсказки', 
                'решения', 'проблема', 'проблема', 'решение проблем', 'поиск и устранение неисправностей', 
                'устранение неисправностей', 'исправить', 'исправления', 'решить', 'решение', 'адрес', 
                'справиться с', 'справляясь с', 'обработать', 'обработка',
            
            ],
            'zh' => [
                '人工智能', '需要', '想要', '会', '可以', '能', '请', '帮助', '工具', 
                '网站', 'wensotes', '模型', '给我', '给', '告诉', '告诉我', '我会',
                '如何', '应该', '为什么', '什么', '哪里', '何时', '哪个', '找到', '显示', 
                '推荐', '建议', '建议', '最好', '顶级', '列表', '例子', '例子', 
                '方法', '指南', '教程', '步骤', '过程', '解决方案', '提示', 
                '策略', '策略', '想法', '想法', '资源', '信息', 
                '详细信息', '解释', '解释', '理解', '澄清', '见解', 
                '概述', '评论', '说明', '支持', '帮助', '援助', 
                '例子', '比较', '比较', '方式', '方法', '技术', 
                '方法', '方法', '选项', '替代方案', '解释', 
                '分步指南', '流程', '框架', '计划', '计划', '提出', 
                '提议', '信息', '详细信息', '功能', '好处', 
                '缺点', '优点', '缺点', '价值', '重要性', '影响', 
                '效果', '效果', '结果', '结果', '反馈', '输入', '回复', 
                '意见', '意见', '建议', '建议', '提示', '提示', 
                '解决方案', '问题', '问题', '解决问题', '故障排除', 
                '故障排除', '修复', '修复', '解决', '解决方案', '地址', 
                '处理', '处理', '处理', '处理',
            ],
            'ja' => [
                '人工知能', '必要', '欲しい', 'したい', 'できる', 'できた', 'お願いします', '助け', 'ツール', 
                'ウェブサイト', 'ウェンソテス', 'モデル', 'ください', '与える', '教える', '教えて', '私は',
                'どうやって', 'すべき', 'なぜ', '何', 'どこ', 'いつ', 'どちら', '見つける', '見せる', 
                'おすすめ', '提案', 'アドバイス', '最高', 'トップ', 'リスト', '例', '例', 
                '方法', 'ガイド', 'チュートリアル', 'ステップ', 'プロセス', '解決策', 'ヒント', 
                '戦略', '戦略', 'アイデア', 'アイデア', 'リソース', '情報', 
                '詳細', '説明', '説明', '理解', '明確にする', '洞察', 
                '概要', 'レビュー', '指示', 'サポート', '助ける', '援助', 
                '例', '比較', '比較', '方法', '方法', '技術', 
                'アプローチ', 'アプローチ', 'オプション', '代替案', '説明', 
                'ステップバイステップガイド', 'プロセス', 'フレームワーク', '計画', '計画', '提案', 
                '提案', '情報', '詳細', '特徴', '利点', 
                '短所', '長所', '短所', '価値', '重要性', '影響', 
                '効果', '効果', '結果', '結果', 'フィードバック', '入力', '応答', 
                '意見', '意見', '提案', '提案', 'ヒント', 'ヒント', 
                '解決策', '問題', '問題', '問題解決', 'トラブルシューティング', 
                'トラブルシューティング', '修正', '修正', '解決', '解決策', '住所', 
                '対処', '対処', '処理', '処理',
            ],
            'ar' => [
                'الذكاء الاصطناعي', 'حاجة', 'أريد', 'سأفعل', 'يمكن', 'يمكن أن', 'من فضلك', 'مساعدة', 'أداة', 
                'موقع', 'ويسنوتس', 'نموذج', 'أعطني', 'يعطي', 'يخبر', 'أخبرني', 'سأفعل',
                'كيف', 'ينبغي', 'لماذا', 'ماذا', 'أين', 'متى', 'أي', 'اعثر على', 'عرض', 
                'يوصي', 'اقترح', 'نصيحة', 'أفضل', 'أعلى', 'قائمة', 'مثال', 'أمثلة', 
                'طريقة', 'دليل', 'دروس', 'خطوات', 'عملية', 'حل', 'نصائح', 
                'استراتيجية', 'استراتيجيات', 'فكرة', 'أفكار', 'موارد', 'معلومات', 
                'تفاصيل', 'شرح', 'شرح', 'فهم', 'توضيح', 'رؤية', 
                'نظرة عامة', 'مراجعة', 'تعليمات', 'دعم', 'مساعدة', 'مساعدة', 
                'أمثلة', 'مقارنة', 'مقارنة', 'طرق', 'طرق', 'تقنيات', 
                'نهج', 'مناهج', 'خيارات', 'بدائل', 'شرح', 
                'دليل خطوة بخطوة', 'عمليات', 'إطار عمل', 'خطة', 'خطط', 'اقتراح', 
                'اقتراحات', 'معلومات', 'تفاصيل', 'ميزات', 'فوائد', 
                'عيوب', 'الإيجابيات', 'السلبيات', 'قيمة', 'أهمية', 'تأثير', 
                'تأثير', 'تأثيرات', 'نتائج', 'نتائج', 'ملاحظات', 'مدخلات', 'ردود', 
                'رأي', 'آراء', 'اقتراح', 'اقتراحات', 'نصائح', 'نصائح', 
                'حلول', 'مشكلة', 'مشكلة', 'حل المشكلات', 'استكشاف الأخطاء وإصلاحها', 
                'استكشاف الأخطاء وإصلاحها', 'إصلاح', 'إصلاحات', 'حل', 'حل', 'عنوان', 
                'التعامل مع', 'التعامل مع', 'معالجة', 'معالجة',
            ],
        ];
    
        foreach ($isUserInputRelevant as $lang => $inputList) {
            foreach ($inputList as $e) {
                if (stripos($input, $e) !== false) {
                    // en,fr,es,de,it,pt,nl,ru,zh,ja,ar
                    if ($lang == 'en') { 
                        return $query_parameter_zero_en . ' ' . $query_parameter_one_en . ' ' . $query_parameter_two_en;     
                    } else if ($lang == 'fr') {
                        return $query_parameter_zero_fr . ' ' . $query_parameter_one_fr . ' ' . $query_parameter_two_fr; 
                    } else if ($lang == 'es') {
                        return $query_parameter_zero_es . ' ' . $query_parameter_one_es . ' ' . $query_parameter_two_es; 
                    } else if ($lang == 'de') {
                        return $query_parameter_zero_de . ' ' . $query_parameter_one_de . ' ' . $query_parameter_two_de; 
                    } else if ($lang == 'it') {
                        return $query_parameter_zero_it . ' ' . $query_parameter_one_it . ' ' . $query_parameter_two_it; 
                    } else if ($lang == 'pt') {
                        return $query_parameter_zero_pt . ' ' . $query_parameter_one_pt . ' ' . $query_parameter_two_pt; 
                     } else if ($lang == 'nl') {
                        return $query_parameter_zero_nl . ' ' . $query_parameter_one_nl . ' ' . $query_parameter_two_nl; 
                    } else if ($lang == 'ru') {
                        return $query_parameter_zero_ru . ' ' . $query_parameter_one_ru . ' ' . $query_parameter_two_ru; 
                    } else if ($lang == 'zh') {
                        return $query_parameter_zero_zh . ' ' . $query_parameter_one_zh . ' ' . $query_parameter_two_zh; 
                    } else if ($lang == 'ja') {
                        return $query_parameter_zero_ja . ' ' . $query_parameter_one_ja . ' ' . $query_parameter_two_ja; 
                     } else if ($lang == 'ar') {
                        return $query_parameter_zero_ar . ' ' . $query_parameter_one_ar . ' ' . $query_parameter_two_ar; 
                    }  
                }
            }
        }
        return "no"; 
      }

      // Check if the user is the real owner of a blog, tip, doc or trend checkUserPostOwnership($userId, $category, $id)
        function checkUserPostOwnership($userId, $category, $id) {
            if ($category == 'blog') {
                //check if the user $userId is the owner of the blog $id by checking blogCreator column and id of the blog
                $blog = Blog::where('blogCreator', $userId)->where('id', $id)->first();
                if ($blog) {
                    return true;
                } else {
                    return false;
                }
            } else if ($category == 'tip') {
                //check if the user $userId is the owner of the tip $id by checking tipCreator column and id of the tip
                $tip = Tip::where('tipCreator', $userId)->where('id', $id)->first();
                if ($tip) {
                    return true;
                } else {
                    return false;
                }
            } else if ($category == 'doc') {
                //check if the user $userId is the owner of the doc $id by checking docCreator column and id of the doc
                $doc = Doc::where('docCreator', $userId)->where('id', $id)->first();
                if ($doc) {
                    return true;
                } else {
                    return false;
                }
            } else if ($category == 'trend') {
                //check if the user $userId is the owner of the trend $id by checking trendCreator column and id of the trend
                $trend = Trend::where('trendCreator', $userId)->where('id', $id)->first();
                if ($trend) {
                    return true;
                } else {
                    return false;
                }
            } else if ($category == 'training') {
                //check if the user $userId is the owner of the trend $id by checking trendCreator column and id of the trend
                $training = Training::where('creator', $userId)->where('id', $id)->first();
                if ($training) {
                    return true;
                } else {
                    return false;
                }
            }
            
        }

        public function generateRandomString($length = 6) {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            // convert to uppercase
            $randomString = strtoupper($randomString);
            return $randomString;
        }

         // Function to share post on Facebook
     
 
     
}
