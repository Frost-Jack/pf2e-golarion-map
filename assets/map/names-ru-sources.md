# Источники русских названий карты

Дата проверки: 2026-10-23.

Первая буква русских подписей приведена к прописной для отображения на карте, в поиске и заголовках карточек. Регистр остальных слов не менялся; исходное написание в цитируемых вариантах может отличаться.

Словарь покрывает **4011 из 4011** уникальных названий каталога карты (100%). Для **1164** использованы опубликованные русские формы, в том числе с описанными редакционными исправлениями; **2847** остальных переведены редакционно. Это не заявление о наличии официального перевода всех названий. Полный перечень редакционных вариантов и решения по неоднозначным именам находятся в [names-ru-editorial.md](names-ru-editorial.md).

Происхождение хранится только в документации. `names-ru.json` содержит обычные пары English → Русский. Карта, поиск и всплывающие подписи не показывают коды источников, оценки или пометки редакционного перевода. Английский режим сохраняет исходные названия.

## Источники

- **T**: [Глоссарий переводчиков Pathfinder 2E](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/master/for_translators/translation_terms.txt), проект `pf2e_ru/pf2e_ru_translation`. Использованы точные пары `English: Русский`; пояснения в скобках удалены. Совпадение английского ключа с названием карты точное и чувствительно к регистру.
- **C**: [Глава об Эпохе Утраченных Пророчеств, раздел Beyond the Inner Sea](https://pf2e-ru-translation.readthedocs.io/ru/latest/lost_omens/index.html#beyond-the-inner-sea). Названия восьми континентов и Внутреннего моря сверены с русским текстом географического обзора.
- **G**: точные парные заголовки из [Наций](https://pf2e-ru-translation.readthedocs.io/ru/latest/game_mastering/tools/Nations.html) и [Поселений](https://pf2e-ru-translation.readthedocs.io/ru/latest/game_mastering/tools/Settlements.html) того же справочника. Заголовки «Андоран (Andoran)», «Рахадум (Rahadoum)», «Отари (Otari)», «Порт-Перил (Port Peril)» сверены с исходными `source/game_mastering/tools/{Nations,Settlements}.rst` в репозитории.

В исходной части словаря русское написание следует переводу PF2e, поэтому `Absalom` передаётся как «Абсалом», а не вариантом «Авессалом» из некоторых переводов PF1. При расхождениях сохраняется прежний вариант, кроме отдельно описанных исправлений качества. Альтернативы не подставляются автоматически.

- **R**: полный [исходный корпус перевода PF2e](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/tree/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source), ревизия `b054074ba1388edcc99ac37e951c8e77c6d2c79d`. Просмотрены 2264 RST-файла, приняты 25 новых точных пар географических имён с проверкой контекста. Для каждой пары указана строка исходника.
- **K**: публичная карта [«Мир Голариона»](https://app.kanka.io/w/227989/entities/5472656/map), авторы [goblin box](https://t.me/pathgoblin). Русское имя взято из имени маркера, английское из явного оригинала в квадратных скобках в начале его описания. Для каждой пары указана индивидуальная ссылка. Данные прочитаны через публичный [map-api](https://app.kanka.io/w/227989/entities/5472656/map-api).

- **P**: [каталог топонимов pf2.ru](https://pf2.ru/toponyms), его публичная таблица `name` / `rus_name` с типом объекта, принадлежностью и книгой-источником. Проверены все 1264 записи. Найдены 1103 совпадения с картой, 871 из них добавлены к прежним 275. При сопоставлении нормализованы только регистр, Unicode и типографский апостроф; неоднозначное нечёткое сопоставление не использовано. Пары просмотрены двумя исполнителями; исправления опечаток и согласования приведены ниже. Указание книги в таблице отражает каталог pf2.ru и не означает, что перевод проверен по печатному изданию.
- **O**: публичные файлы локализации Kingmaker: [русские строки и исправления EugVV/PFKM-ru](https://github.com/EugVV/PFKM-ru) и [английские строки akintos/pathfinder-translation](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json). Сопоставлены точные английские строки и общие GUID. Приняты 18 дополнительных географических имён; общие строки City Hall, Watchtower, Whisper River и Temple of Asmodeus не использованы как подтверждение отдельного места.
- Дополнительная сверка: просмотрены все 313 статей [русской Pathfinder Wiki](https://pathfinder.fandom.com/ru/wiki/Голарион). Прямое соответствие `[[Umok|Умок]]` в [Изгере](https://pathfinder.fandom.com/ru/wiki/Изгер) подтверждает пару pf2.ru. У Isger статья содержит противоречащие варианты заголовка и первого предложения, поэтому сама по себе не считается единственным авторитетом.

## Качество и приоритеты

Прежний перевод PF2e имеет приоритет при допустимых вариантах транскрипции: например, Абсалом, Вердюран, Муанги. Новые названия с теми же основами согласованы. Очевидные опечатки не переносились. Isger, Mushfens, Tanglebriar и Realm of the Mammoth Lords заменены более точными опубликованными формами. Подписи со словом «руины» не распространяются на исторические годы, если его нет в английском имени. Для Dyinglight, Iz, Storasta и Undarin теперь найдены самостоятельные имена в P без статуса разрушения.

## Права и атрибуция

Авторы русского перевода: сообщество проекта `pf2e_ru/pf2e_ru_translation`. [Лицензионная страница источника](https://pf2e-ru-translation.readthedocs.io/ru/latest/licenses.html) содержит Community Use Policy Paizo и OGL 1.0a. Здесь сохранены только краткие пары собственных географических имён, без описаний, правил, иллюстраций и статей. Географические имена сеттинга Paizo не объявляются этим файлом Open Game Content; исходные обозначения и права сохраняются. Модуль является некоммерческой работой сообщества и не одобрен Paizo.

Карта goblin box публична и распространяется авторами бесплатно; явная лицензия CC на неё не заявлена. Авторы просят указывать ссылку на канал при использовании материалов. Здесь использованы только короткие пары названий с атрибуцией; изображения, описания, статьи и сама карта goblin box в модуль не копировались. Названия не объявляются свободно лицензированными вместе с кодом модуля.

Каталог pf2.ru: [страница лицензий](https://pf2.ru/licenses), авторы сайта и исходных переводов. Использованы только краткие пары географических имён; статьи, описания и правила не копировались. Наличие ORC/OGL на сайте не означает, что собственные имена сеттинга объявлены свободным Licensed Material.

Локализация Kingmaker сохраняет права Owlcat, Paizo и авторов исправлений. Взяты только короткие пары названий и их GUID, без диалогов, описаний и полного корпуса локализации. Все эти названия отделены от лицензии исходного кода модуля.

## Опубликованные формы и происхождение

| English | Русский | Источник |
| --- | --- | --- |
| Aaramor | Аарамор | P: [каталог](https://pf2.ru/toponyms/aaramor); Путеводитель по региону Внутреннего Моря |
| Abberton | Аббертон | K: [маркер 280047](https://app.kanka.io/w/227989/entities/5472656/map/markers/280047) |
| Abendego Piercing | Прорыв Абендего | P: [каталог](https://pf2.ru/toponyms/abendego%20piercing); Путеводитель по региону Внутреннего Моря |
| Abken | Абкен | P: [каталог](https://pf2.ru/toponyms/abken); Путеводитель по региону Внутреннего Моря |
| Absalom | Абсалом | T |
| Acuben Isle | Остров Акубен | P: [каталог](https://pf2.ru/toponyms/acuben%20isle); Путеводитель по региону Внутреннего Моря |
| Adivian River | Река Адивиан | P: [каталог](https://pf2.ru/toponyms/adivian%20river); Путеводитель по региону Внутреннего Моря |
| Aegos | Эгос | P: [каталог](https://pf2.ru/toponyms/aegos); Путеводитель по региону Внутреннего Моря |
| Aerduin's Folly | Развалины Эрдуина | P: [каталог](https://pf2.ru/toponyms/aerduin%27s%20folly); Путеводитель по региону Внутреннего Моря |
| Al-Bashir | Аль-Башир | K: [маркер 312097](https://app.kanka.io/w/227989/entities/5472656/map/markers/312097) |
| Alamein Peninsula | Полуостров Аламейн | P: [каталог](https://pf2.ru/toponyms/alamein%20peninsula); Путеводитель по региону Внутреннего Моря |
| Albatross | Альбатрос | P: [каталог](https://pf2.ru/toponyms/albatross); Путеводитель по региону Внутреннего Моря |
| Algid Wastes | Стылые пустоши | P: [каталог](https://pf2.ru/toponyms/algid%20wastes); Путеводитель по региону Внутреннего Моря |
| Algidheart | Альгидхарт | K: [маркер 259861](https://app.kanka.io/w/227989/entities/5472656/map/markers/259861) |
| Alkenstar City | Алькенстар | P: [каталог](https://pf2.ru/toponyms/alkenstar%20city);  Impossible Lands |
| Almas | Алмас | K: [маркер 282771](https://app.kanka.io/w/227989/entities/5472656/map/markers/282771) |
| Alo-Gakil | Ало-Гакил | P: [каталог](https://pf2.ru/toponyms/alo-gakil); Путеводитель по региону Внутреннего Моря |
| Aloren River | Река Алорен | P: [каталог](https://pf2.ru/toponyms/aloren%20river); Путеводитель по региону Внутреннего Моря |
| Alvis | Алвис | P: [каталог](https://pf2.ru/toponyms/alvis);  Shining Kingdoms |
| Amaans | Амаанс | P: [каталог](https://pf2.ru/toponyms/amaans); Путеводитель по региону Внутреннего Моря |
| An | Ан | P: [каталог](https://pf2.ru/toponyms/an); Путеводитель по миру |
| Andoran | Андоран | G |
| Andoshen River | Река Андошен | P: [каталог](https://pf2.ru/toponyms/andoshen%20river);  Shining Kingdoms |
| Anferita Wood | Лес Анферита | P: [каталог](https://pf2.ru/toponyms/anferita%20wood); Путеводитель по региону Внутреннего Моря |
| Antarkos Ocean | Антаркийский океан | P: [каталог](https://pf2.ru/toponyms/antarkos%20ocean); Путеводитель по миру |
| Anthusis | Антузис | T |
| Antios's Crown | Корона Антиоса | P: [каталог](https://pf2.ru/toponyms/antios%27s%20crown); Путеводитель по региону Внутреннего Моря |
| Antler Rock | Рогатая Скала | P: [каталог](https://pf2.ru/toponyms/antler%20rock); Путеводитель по региону Внутреннего Моря |
| Arcadia | Аркадия | C |
| Arcadian Ocean | Аркадийский океан | K: [маркер 249828](https://app.kanka.io/w/227989/entities/5472656/map/markers/249828) |
| Arch of Aroden | Арка Ародена | P: [каталог](https://pf2.ru/toponyms/arch%20of%20aroden); P + E: исправлена опечатка Ародера, имя божества Ароден |
| Ardagh | Ардаг | P: [каталог](https://pf2.ru/toponyms/ardagh); Путеводитель по региону Внутреннего Моря |
| Ardeal | Ардеаль | P: [каталог](https://pf2.ru/toponyms/ardeal); Путеводитель по региону Внутреннего Моря |
| Ardis | Ардис | P: [каталог](https://pf2.ru/toponyms/ardis); Путеводитель по региону Внутреннего Моря |
| Argavist Island | Остров Аргавист | P: [каталог](https://pf2.ru/toponyms/argavist%20island); Путеводитель по региону Внутреннего Моря |
| Armag's Tomb | Гробница Армага | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `f961ffc5-447f-4859-ac51-825642564aca` |
| Arsmeril | Арсмерил | P: [каталог](https://pf2.ru/toponyms/arsmeril); Путеводитель по региону Внутреннего Моря |
| Arthfell Forest | Лес Артфел | P: [каталог](https://pf2.ru/toponyms/arthfell%20forest);  Shining Kingdoms |
| Arthfell Mountains | Горы Артфел | P: [каталог](https://pf2.ru/toponyms/arthfell%20mountains);  Shining Kingdoms |
| Arthrosh River | Река Артрош | P: [каталог](https://pf2.ru/toponyms/arthrosh%20river);  Shining Kingdoms |
| Artume | Артум | P: [каталог](https://pf2.ru/toponyms/artume); Путеводитель по региону Внутреннего Моря |
| Arzikal | Арзикаль | P: [каталог](https://pf2.ru/toponyms/arzikal); P + E: исправлена перестановка согласных в Азрикаль |
| Ascanor Lodge | Приют Асканор | P: [каталог](https://pf2.ru/toponyms/ascanor%20lodge); Путеводитель по региону Внутреннего Моря |
| Ashwood | Ясени | P: [каталог](https://pf2.ru/toponyms/ashwood); Путеводитель по региону Внутреннего Моря |
| Asmodeus Mirage | Мираж Асмодея | P: [каталог](https://pf2.ru/toponyms/asmodeus%20mirage); Путеводитель по региону Внутреннего Моря |
| Aspenthar | Аспентар | T |
| Aspo Bay | Залив Эспо | P: [каталог](https://pf2.ru/toponyms/aspo%20bay);  Shining Kingdoms |
| Aspodell Mountains | Горы Асподелл | P: [каталог](https://pf2.ru/toponyms/aspodell%20mountains);  Shining Kingdoms |
| Atteran Ranches | Аттеранские пастбища | P: [каталог](https://pf2.ru/toponyms/atteran%20ranches); Путеводитель по региону Внутреннего Моря |
| Augustana | Августана | K: [маркер 282773](https://app.kanka.io/w/227989/entities/5472656/map/markers/282773) |
| Avalon Bay | Залив Авалон | P: [каталог](https://pf2.ru/toponyms/avalon%20bay); Путеводитель по региону Внутреннего Моря |
| Avendale | Эвендейл | P: [каталог](https://pf2.ru/toponyms/avendale); Путеводитель по региону Внутреннего Моря |
| Avennara | Авеннара | P: [каталог](https://pf2.ru/toponyms/avennara);  Shining Kingdoms |
| Avernus | Аверн | T |
| Avistan | Авистан | C |
| Awzera River | Река Аузера | P: [каталог](https://pf2.ru/toponyms/awzera%20river); Путеводитель по региону Внутреннего Моря |
| Axan Wood | Аксанский лес | P: [каталог](https://pf2.ru/toponyms/axan%20wood);  Impossible Lands |
| Axanir River | Река Аксанир | P: [каталог](https://pf2.ru/toponyms/axanir%20river);  Impossible Lands |
| Ayajinbo | Аяджимбо | P: [каталог](https://pf2.ru/toponyms/ayajinbo); Тянь-Ша. Путеводитель по миру |
| Azir | Азир | P: [каталог](https://pf2.ru/toponyms/azir); Путеводитель по миру |
| Azlant | Ацлант | C |
| Azurestone | Лазурелит | P: [каталог](https://pf2.ru/toponyms/azurestone);  Shining Kingdoms |
| Bachuan | Бачуань | P: [каталог](https://pf2.ru/toponyms/bachuan); Тянь-Ша. Путеводитель по миру |
| Backar Forest | Лес Баккар | P: [каталог](https://pf2.ru/toponyms/backar%20forest); Путеводитель по региону Внутреннего Моря |
| Bacul Gruii | Бакул-Груйи | P: [каталог](https://pf2.ru/toponyms/bacul%20gruii); Путеводитель по региону Внутреннего Моря |
| Bag Island | Остров Мешок | P: [каталог](https://pf2.ru/toponyms/bag%20island); Путеводитель по региону Внутреннего Моря |
| Bandu Hills | Холмы Банду | P: [каталог](https://pf2.ru/toponyms/bandu%20hills); Путеводитель по миру,  The Mwangi Expanse |
| Barkskin Lake | Дубокожее озеро | P: [каталог](https://pf2.ru/toponyms/barkskin%20lake);  The Mwangi Expanse |
| Barrier Wall | Барьерная Стена | T |
| Barrowmoor | Могильная пустошь | P: [каталог](https://pf2.ru/toponyms/barrowmoor); Путеводитель по региону Внутреннего Моря |
| Barrowood | Барровуд | T |
| Barstoi | Барстуа | P: [каталог](https://pf2.ru/toponyms/barstoi); Путеводитель по региону Внутреннего Моря |
| Baslwief | Базльвиф | P: [каталог](https://pf2.ru/toponyms/baslwief); Путеводитель по региону Внутреннего Моря |
| Bastardhall | Бастардхол | P: [каталог](https://pf2.ru/toponyms/bastardhall); Путеводитель по региону Внутреннего Моря |
| Battle of Falheart | Битва при Фалхарте | P: [каталог](https://pf2.ru/toponyms/battle%20of%20falheart); Путеводитель по региону Внутреннего Моря |
| Battle of Grasyhot | Битва при Грейзихоте | P: [каталог](https://pf2.ru/toponyms/battle%20of%20grasyhot); Путеводитель по региону Внутреннего Моря |
| Battlewall | Бэтлвол | P: [каталог](https://pf2.ru/toponyms/battlewall); Путеводитель по региону Внутреннего Моря |
| Bay of Deng | Бухта Денга | P: [каталог](https://pf2.ru/toponyms/bay%20of%20deng); Путеводитель по региону Внутреннего Моря |
| Bay of Solva | Бухта Солвы | P: [каталог](https://pf2.ru/toponyms/bay%20of%20solva); Путеводитель по региону Внутреннего Моря |
| Beehive | Улей | P: [каталог](https://pf2.ru/toponyms/beehive); Путеводитель по региону Внутреннего Моря |
| Belde | Бельде | P: [каталог](https://pf2.ru/toponyms/belde); Путеводитель по региону Внутреннего Моря |
| Belkzen | Белкзен | T |
| Bellis | Беллис | P: [каталог](https://pf2.ru/toponyms/bellis);  Shining Kingdoms |
| Berm | Заграда | P: [каталог](https://pf2.ru/toponyms/berm);  Shining Kingdoms |
| Berus | Берус | P: [каталог](https://pf2.ru/toponyms/berus); Путеводитель по региону Внутреннего Моря |
| Besmara's Throne | Трон Бесмары | P: [каталог](https://pf2.ru/toponyms/besmara%27s%20throne); Путеводитель по региону Внутреннего Моря |
| Bika-Rano Isle | Остров Бика-Рано | P: [каталог](https://pf2.ru/toponyms/bika-rano%20isle); Путеводитель по региону Внутреннего Моря |
| Bildt | Бильдт | K: [маркер 259856](https://app.kanka.io/w/227989/entities/5472656/map/markers/259856) |
| Biston | Бистон | P: [каталог](https://pf2.ru/toponyms/biston); Путеводитель по региону Внутреннего Моря |
| Black Flow | Чёрная река | P: [каталог](https://pf2.ru/toponyms/black%20flow);  The Mwangi Expanse |
| Black Forks | Чёрная Развилка | P: [каталог](https://pf2.ru/toponyms/black%20forks);  Shining Kingdoms |
| Black Sands | Чёрные Пески | P: [каталог](https://pf2.ru/toponyms/black%20sands); Путеводитель по региону Внутреннего Моря |
| Black Tarn | Чёрное озеро | P: [каталог](https://pf2.ru/toponyms/black%20tarn); Путеводитель по региону Внутреннего Моря |
| Blackcove | Черная бухта | T |
| Blackraven Hall | Дом Черного Ворона | P: [каталог](https://pf2.ru/toponyms/blackraven%20hall); Путеводитель по региону Внутреннего Моря |
| Blisterwell | Блистервелл | P: [каталог](https://pf2.ru/toponyms/blisterwell); Путеводитель по региону Внутреннего Моря |
| Bloodcove | Кровавая Заводь | P: [каталог](https://pf2.ru/toponyms/bloodcove);  The Mwangi Expanse, Война бессмертных |
| Bloodglister | Кровавый остров | P: [каталог](https://pf2.ru/toponyms/bloodglister); Путеводитель по региону Внутреннего Моря |
| Bloodsworn Vale | Долина Кровавой Клятвы | P: [каталог](https://pf2.ru/toponyms/bloodsworn%20vale); Путеводитель по региону Внутреннего Моря |
| Bloomwreath | Цветущий венец | K: [маркер 338911](https://app.kanka.io/w/227989/entities/5472656/map/markers/338911) |
| Boali | Боали | P: [каталог](https://pf2.ru/toponyms/boali);  The Mwangi Expanse |
| Boarwood | Кобаньелесье | K: [маркер 282789](https://app.kanka.io/w/227989/entities/5472656/map/markers/282789) |
| Bodie's Haunt | Логово Боди | P: [каталог](https://pf2.ru/toponyms/bodie%27s%20haunt); Путеводитель по региону Внутреннего Моря |
| Bosco | Боско | K: [маркер 280060](https://app.kanka.io/w/227989/entities/5472656/map/markers/280060) |
| Botosani | Ботосани | P: [каталог](https://pf2.ru/toponyms/botosani); Путеводитель по миру |
| Braganza | Браганца | P: [каталог](https://pf2.ru/toponyms/braganza); Путеводитель по региону Внутреннего Моря |
| Branthlend Mountains | Горделивая гряда | P: [каталог](https://pf2.ru/toponyms/branthlend%20mountains); Серия приключений Kingmaker |
| Brastle River | Река Брастл | P: [каталог](https://pf2.ru/toponyms/brastle%20river); Путеводитель по региону Внутреннего Моря |
| Brastlewark | Брастлварк | K: [маркер 281696](https://app.kanka.io/w/227989/entities/5472656/map/markers/281696) |
| Brazen Peaks | Бронзовые пики | P: [каталог](https://pf2.ru/toponyms/brazen%20peaks);  Impossible Lands |
| Brevoy | Бревой | K: [маркер 273700](https://app.kanka.io/w/227989/entities/5472656/map/markers/273700) |
| Briarbough | Брайарбау | T |
| Brimstone Haruspex | Серный Гадатель | P: [каталог](https://pf2.ru/toponyms/brimstone%20haruspex); Путеводитель по региону Внутреннего Моря |
| Brimstone Springs | Серные Источники | P: [каталог](https://pf2.ru/toponyms/brimstone%20springs); Путеводитель по региону Внутреннего Моря |
| Brinewall | Пенная Стена | P: [каталог](https://pf2.ru/toponyms/brinewall); Путеводитель по региону Внутреннего Моря |
| Broken Bay | Рваная бухта | P: [каталог](https://pf2.ru/toponyms/broken%20bay); Путеводитель по региону Внутреннего Моря |
| Broken Lands | Разоренные Земли | T |
| Broken Shore | Изломанный берег | P: [каталог](https://pf2.ru/toponyms/broken%20shore); Путеводитель по региону Внутреннего Моря |
| Bronze Hook | Бронзовый Крюк | P: [каталог](https://pf2.ru/toponyms/bronze%20hook); Путеводитель по региону Внутреннего Моря |
| Brunderton | Брандертон | P: [каталог](https://pf2.ru/toponyms/brunderton); Путеводитель по региону Внутреннего Моря |
| Bug Harbor | Жужжащая Гавань | P: [каталог](https://pf2.ru/toponyms/bug%20harbor); Путеводитель по региону Внутреннего Моря |
| Burning Cape | Пылающий мыс | P: [каталог](https://pf2.ru/toponyms/burning%20cape); Путеводитель по региону Внутреннего Моря |
| Caina | Ка́ина | T |
| Cairnlands | Земля Дольменов | P: [каталог](https://pf2.ru/toponyms/cairnlands);  Absalom, City of Lost Omens |
| Caldamin | Кальдамин | P: [каталог](https://pf2.ru/toponyms/caldamin);  Shining Kingdoms |
| Caliphas | Калифас | K: [маркер 277942](https://app.kanka.io/w/227989/entities/5472656/map/markers/277942) |
| Calphiak Mountains | Горы Калфиак | P: [каталог](https://pf2.ru/toponyms/calphiak%20mountains); Путеводитель по региону Внутреннего Моря |
| Candlemere | Мерцающее озеро | P: [каталог](https://pf2.ru/toponyms/candlemere); Серия приключений Kingmaker |
| Candlemere Tower | Башня Мерцающего озера | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `9e3b0ed2-4d3d-4b32-bc17-587893b5a67b` |
| Candlestone Caverns | Пещеры Свечных камней | K: [маркер 282769](https://app.kanka.io/w/227989/entities/5472656/map/markers/282769) |
| Cannibal Isles | Острова Каннибалов | P: [каталог](https://pf2.ru/toponyms/cannibal%20isles); Путеводитель по региону Внутреннего Моря |
| Canorate | Канорейт | K: [маркер 277945](https://app.kanka.io/w/227989/entities/5472656/map/markers/277945) |
| Canterwall | Кантеруол | P: [каталог](https://pf2.ru/toponyms/canterwall); Путеводитель по региону Внутреннего Моря |
| Cape Erebus | Мыс Эребус | P: [каталог](https://pf2.ru/toponyms/cape%20erebus); Путеводитель по региону Внутреннего Моря |
| Carpenden | Карпенден | K: [маркер 282774](https://app.kanka.io/w/227989/entities/5472656/map/markers/282774) |
| Carpenden Plains | Карпенденская равнина | P: [каталог](https://pf2.ru/toponyms/carpenden%20plains);  Shining Kingdoms |
| Carrion Hill | Холм Мертвецов | P: [каталог](https://pf2.ru/toponyms/carrion%20hill); Путеводитель по региону Внутреннего Моря |
| Caruskei | Карускей | P: [каталог](https://pf2.ru/toponyms/caruskei);  Shining Kingdoms |
| Casmaron | Касмарон | C |
| Casnoriva | Каснорива | P: [каталог](https://pf2.ru/toponyms/casnoriva); Путеводитель по региону Внутреннего Моря |
| Cassomir | Кассомир | K: [маркер 282778](https://app.kanka.io/w/227989/entities/5472656/map/markers/282778) |
| Castle Everstand | Вековечная крепость | K: [маркер 277928](https://app.kanka.io/w/227989/entities/5472656/map/markers/277928) |
| Castle Firrine | Замок Фиррин | P: [каталог](https://pf2.ru/toponyms/castle%20firrine);  Knights of Lastwall |
| Castle Kronquist | Замок Кронквист | P: [каталог](https://pf2.ru/toponyms/castle%20kronquist); Путеводитель по региону Внутреннего Моря |
| Castle Odranto | Замок Одранто | P: [каталог](https://pf2.ru/toponyms/castle%20odranto); Путеводитель по региону Внутреннего Моря |
| Castle Urion | Замок Урион | P: [каталог](https://pf2.ru/toponyms/castle%20urion); Путеводитель по региону Внутреннего Моря |
| Castrovin Sea | Море Кастровин | P: [каталог](https://pf2.ru/toponyms/castrovin%20sea); Основная книга ведущего |
| Cathedral of Claws | Собор Когтей | P: [каталог](https://pf2.ru/toponyms/cathedral%20of%20claws); Путеводитель по региону Внутреннего Моря |
| Caves of the Craven | Пещеры Трусливых | P: [каталог](https://pf2.ru/toponyms/caves%20of%20the%20craven); Путеводитель по региону Внутреннего Моря |
| Celwynvian | Сэльвинвиэн | K: [маркер 259845](https://app.kanka.io/w/227989/entities/5472656/map/markers/259845) |
| Cenotaph | Кенотаф | P: [каталог](https://pf2.ru/toponyms/cenotaph); Путеводитель по региону Внутреннего Моря |
| Century Root | Вековой пень | P: [каталог](https://pf2.ru/toponyms/century%20root);  Shining Kingdoms |
| Cesca | Цеска | P: [каталог](https://pf2.ru/toponyms/cesca); Путеводитель по региону Внутреннего Моря |
| Cettigne | Кеттинь | P: [каталог](https://pf2.ru/toponyms/cettigne); Путеводитель по региону Внутреннего Моря |
| Chadoth's Tooth | Клык Чадота | P: [каталог](https://pf2.ru/toponyms/chadoth%27s%20tooth); Путеводитель по региону Внутреннего Моря |
| Chakikoth Isle | Остров Чакикот | P: [каталог](https://pf2.ru/toponyms/chakikoth%20isle); Путеводитель по региону Внутреннего Моря |
| Chalkstone River | Белокаменная река | P: [каталог](https://pf2.ru/toponyms/chalkstone%20river); Путеводитель по региону Внутреннего Моря |
| Changdo | Чандо | P: [каталог](https://pf2.ru/toponyms/changdo); Тянь-Ша. Путеводитель по миру |
| Chastel | Кастель | P: [каталог](https://pf2.ru/toponyms/chastel); Путеводитель по региону Внутреннего Моря |
| Chateau Douleurs | Шато-Дулёр | P: [каталог](https://pf2.ru/toponyms/chateau%20douleurs); Путеводитель по региону Внутреннего Моря |
| Chavali River | Река Чавали | P: [каталог](https://pf2.ru/toponyms/chavali%20river); Путеводитель по региону Внутреннего Моря |
| Cheliax | Челия | T |
| Chernasardo | Чернасардо | P: [каталог](https://pf2.ru/toponyms/chernasardo); Путеводитель по региону Внутреннего Моря |
| Chesed | Чесед | K: [маркер 260092](https://app.kanka.io/w/227989/entities/5472656/map/markers/260092) |
| Chillblight | Хладомор | P: [каталог](https://pf2.ru/toponyms/chillblight); Путеводитель по региону Внутреннего Моря |
| Chimera Cove | Бухта Химеры | P: [каталог](https://pf2.ru/toponyms/chimera%20cove);  Shining Kingdoms |
| Chiron | Хирон | P: [каталог](https://pf2.ru/toponyms/chiron); Путеводитель по региону Внутреннего Моря |
| Chitterhome | Читтерхом | T |
| Chitterwood | Читтервуд | K: [маркер 281699](https://app.kanka.io/w/227989/entities/5472656/map/markers/281699) |
| Choking Tower | Удушливая башня | P: [каталог](https://pf2.ru/toponyms/choking%20tower); Путеводитель по региону Внутреннего Моря |
| Choral River | Река Корэл | P: [каталог](https://pf2.ru/toponyms/choral%20river); Путеводитель по региону Внутреннего Моря |
| Chu Ye | Чу Е | P: [каталог](https://pf2.ru/toponyms/chu%20ye); Тянь-Ша. Путеводитель по миру |
| Churlwood | Черлвуд | P: [каталог](https://pf2.ru/toponyms/churlwood); Путеводитель по региону Внутреннего Моря |
| Cicatrix | Рубец | P: [каталог](https://pf2.ru/toponyms/cicatrix);  Shining Kingdoms |
| Ciricskree | Сирикскрии | T |
| Citadel Altaerein | Цитадель Альтерейн | P: [каталог](https://pf2.ru/toponyms/citadel%20altaerein); Путеводитель по региону Внутреннего Моря |
| Citadel Dinyar | Цитадель Диньяр | P: [каталог](https://pf2.ru/toponyms/citadel%20dinyar); Путеводитель по региону Внутреннего Моря |
| Citadel Enferac | Цитадель Энферак | P: [каталог](https://pf2.ru/toponyms/citadel%20enferac); Путеводитель по региону Внутреннего Моря |
| Citadel Gheisteno | Цитадель Гайстено | P: [каталог](https://pf2.ru/toponyms/citadel%20gheisteno); Путеводитель по региону Внутреннего Моря |
| Citadel Gheradesca | Цитадель Герадеска | P: [каталог](https://pf2.ru/toponyms/citadel%20gheradesca); Путеводитель по региону Внутреннего Моря |
| Citadel Rivad | Цитадель Ривад | P: [каталог](https://pf2.ru/toponyms/citadel%20rivad); Путеводитель по региону Внутреннего Моря |
| Citadel Vraid | Цитадель Врейд | P: [каталог](https://pf2.ru/toponyms/citadel%20vraid); Путеводитель по миру |
| Citadel of Flame | Цитадель Пламени | P: [каталог](https://pf2.ru/toponyms/citadel%20of%20flame); Путеводитель по региону Внутреннего Моря |
| Citadel of the Alchemist | Цитадель Алхимика | P: [каталог](https://pf2.ru/toponyms/citadel%20of%20the%20alchemist); Путеводитель по миру |
| City of Thorns | Терновый Город | T |
| Claes | Клэс | P: [каталог](https://pf2.ru/toponyms/claes);  Shining Kingdoms |
| Claw Point | Мыс Коготь | P: [каталог](https://pf2.ru/toponyms/claw%20point); Путеводитель по региону Внутреннего Моря |
| Cliffs of Kusha-ta-Pahk | Утёсы Куш-Та-Пак | P: [каталог](https://pf2.ru/toponyms/cliffs%20of%20kusha-ta-pahk); Путеводитель по региону Внутреннего Моря |
| Clockwork Cathedral | Заводной Собор | T |
| Cloudreaver Keep | Облачная цитадель | P: [каталог](https://pf2.ru/toponyms/cloudreaver%20keep); Путеводитель по региону Внутреннего Моря |
| Clover's Crossing | Клеверная Переправа | P: [каталог](https://pf2.ru/toponyms/clover%27s%20crossing); Путеводитель по региону Внутреннего Моря |
| Coast of Graves | Берег Надгробий | P: [каталог](https://pf2.ru/toponyms/coast%20of%20graves); Путеводитель по региону Внутреннего Моря |
| Coastal Cairns | Могильники | P: [каталог](https://pf2.ru/toponyms/coastal%20cairns); Путеводитель по региону Внутреннего Моря |
| Cocytus | Коцит | T |
| Collapsed Halls | Рухнувшие Чертоги | P: [каталог](https://pf2.ru/toponyms/collapsed%20halls); Путеводитель по региону Внутреннего Моря |
| Conerica River | Река Конерика | P: [каталог](https://pf2.ru/toponyms/conerica%20river); Путеводитель по региону Внутреннего Моря |
| Conqueror's Bay | Залив Завоевателя | P: [каталог](https://pf2.ru/toponyms/conqueror%27s%20bay); Путеводитель по региону Внутреннего Моря |
| Copper River | Медная река | P: [каталог](https://pf2.ru/toponyms/copper%20river); Путеводитель по региону Внутреннего Моря |
| Coralesian | Коралезиан | P: [каталог](https://pf2.ru/toponyms/coralesian);  Shining Kingdoms |
| Cordelon | Корделон | P: [каталог](https://pf2.ru/toponyms/cordelon); Путеводитель по региону Внутреннего Моря |
| Corentyn | Корентин | P: [каталог](https://pf2.ru/toponyms/corentyn); Путеводитель по миру |
| Corvischior | Корвишиор | P: [каталог](https://pf2.ru/toponyms/corvischior); Путеводитель по региону Внутреннего Моря |
| Courtaud | Курто | P: [каталог](https://pf2.ru/toponyms/courtaud); Путеводитель по региону Внутреннего Моря |
| Covenant Rock | Скала Клятвы | P: [каталог](https://pf2.ru/toponyms/covenant%20rock); Путеводитель по региону Внутреннего Моря |
| Crab River | Крабья река | P: [каталог](https://pf2.ru/toponyms/crab%20river);  The Mwangi Expanse |
| Crabfield Island | Крабовый остров | P: [каталог](https://pf2.ru/toponyms/crabfield%20island);  Impossible Lands |
| Creeperwood | Ползучий лес | P: [каталог](https://pf2.ru/toponyms/creeperwood); Путеводитель по региону Внутреннего Моря |
| Crimson Citadel | Алая Цитадель | P: [каталог](https://pf2.ru/toponyms/crimson%20citadel); Путеводитель по миру |
| Crooked River | Петляйка | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `9cc6ec23-d6bf-44c0-8feb-b6fef548bed6` |
| Crossfen | Кроссфен | P: [каталог](https://pf2.ru/toponyms/crossfen); Путеводитель по региону Внутреннего Моря |
| Crown of the World | Корона Мира | C |
| Crownpeaks | Коронные Вершины | P: [каталог](https://pf2.ru/toponyms/crownpeaks); Пушки и шестерни |
| Crowtop | Воронья Слобода | P: [каталог](https://pf2.ru/toponyms/crowtop); Путеводитель по региону Внутреннего Моря |
| Crying Leaf | Плачущий Лист | P: [каталог](https://pf2.ru/toponyms/crying%20leaf); Путеводитель по региону Внутреннего Моря |
| Crypt of Angus Amberleg | Склеп Ангуса Амберлега | P: [каталог](https://pf2.ru/toponyms/crypt%20of%20angus%20amberleg); Путеводитель по региону Внутреннего Моря |
| Crystalhurst | Кристалхёрст | T |
| Cuttle | Каракатица | P: [каталог](https://pf2.ru/toponyms/cuttle); Путеводитель по региону Внутреннего Моря |
| Cyremium | Кайремиум | P: [каталог](https://pf2.ru/toponyms/cyremium);  Shining Kingdoms |
| Dabril | Дабриль | P: [каталог](https://pf2.ru/toponyms/dabril);  Shining Kingdoms |
| Dagger River | Река Клинок | P: [каталог](https://pf2.ru/toponyms/dagger%20river); Путеводитель по региону Внутреннего Моря |
| Daggermark | Даггермарк | K: [маркер 260099](https://app.kanka.io/w/227989/entities/5472656/map/markers/260099) |
| Dagon's Fang | Клык Дагона | P: [каталог](https://pf2.ru/toponyms/dagon%E2%80%99s%20fang); Путеводитель по региону Внутреннего Моря |
| Dahak's Teeth | Клыки Дахака | P: [каталог](https://pf2.ru/toponyms/dahak%27s%20teeth); Путеводитель по региону Внутреннего Моря |
| Dalaston | Даластон | P: [каталог](https://pf2.ru/toponyms/dalaston);  Shining Kingdoms |
| Danver River | Река Данвер | P: [каталог](https://pf2.ru/toponyms/danver%20river); Путеводитель по региону Внутреннего Моря |
| Darkmoon Plain | Темнолунная равнина | P: [каталог](https://pf2.ru/toponyms/darkmoon%20plain);  Shining Kingdoms |
| Darkmoon Vale | Долина Темнолунья | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:679](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L679) |
| Darkreach | Даркрич | P: [каталог](https://pf2.ru/toponyms/darkreach);  The Mwangi Expanse |
| Davarn | Даварн | P: [каталог](https://pf2.ru/toponyms/davarn);  Shining Kingdoms |
| Deadbridge | Дэдбридж | P: [каталог](https://pf2.ru/toponyms/deadbridge); Путеводитель по региону Внутреннего Моря |
| Deadeye's Haunt | Стрелковое Логово | P: [каталог](https://pf2.ru/toponyms/deadeye%E2%80%99s%20haunt); Путеводитель по региону Внутреннего Моря |
| Deepcut River | Глубокая река | P: [каталог](https://pf2.ru/toponyms/deepcut%20river); Путеводитель по региону Внутреннего Моря |
| Deepgate | Глубокие Врата | P: [каталог](https://pf2.ru/toponyms/deepgate); Путеводитель по региону Внутреннего Моря |
| Deepmar | Дипмар | P: [каталог](https://pf2.ru/toponyms/deepmar); Путеводитель по региону Внутреннего Моря |
| Dekarium | Декариум | P: [каталог](https://pf2.ru/toponyms/dekarium); Путеводитель по региону Внутреннего Моря |
| Delmon's Glen | Делмонова лощина | P: [каталог](https://pf2.ru/toponyms/delmon%27s%20glen); P + E: исправлена опечатка лоищна |
| Demgazi | Демгази | P: [каталог](https://pf2.ru/toponyms/demgazi); Путеводитель по региону Внутреннего Моря |
| Desperation Bay | Залив Отчаяния | P: [каталог](https://pf2.ru/toponyms/desperation%20bay);  The Mwangi Expanse |
| Destach River | Река Десташ | P: [каталог](https://pf2.ru/toponyms/destach%20river); Путеводитель по региону Внутреннего Моря |
| Detmer | Детмер | K: [маркер 282759](https://app.kanka.io/w/227989/entities/5472656/map/markers/282759) |
| Devil's Arches | Арки Дьявола | P: [каталог](https://pf2.ru/toponyms/devil%27s%20arches); Путеводитель по региону Внутреннего Моря |
| Devil's Cradle | Колыбель Дьявола | P: [каталог](https://pf2.ru/toponyms/devil%27s%20cradle); Путеводитель по региону Внутреннего Моря |
| Devil's Elbow | Локоть Дьявола | P: [каталог](https://pf2.ru/toponyms/devil%27s%20elbow); Путеводитель по региону Внутреннего Моря |
| Devil's Own | Собственный Дьявол | R: [source/classes/archetypes/Vehicle-Mechanic.rst:56](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/classes/archetypes/Vehicle-Mechanic.rst#L56) |
| Devil's Perch | Насест дьявола | T |
| Dhucharg | Дучарг | P: [каталог](https://pf2.ru/toponyms/dhucharg); Тянь-Ша. Путеводитель по миру |
| Diggen's Rest | Приют Диггена | P: [каталог](https://pf2.ru/toponyms/diggen%27s%20rest);  Shining Kingdoms |
| Dimayen | Димайен | P: [каталог](https://pf2.ru/toponyms/dimayen); Путеводитель по региону Внутреннего Моря |
| Dinosaur Graveyard | Кладбище динозавров | P: [каталог](https://pf2.ru/toponyms/dinosaur%20graveyard); Путеводитель по региону Внутреннего Моря |
| Diobel | Диобэль | K: [маркер 280053](https://app.kanka.io/w/227989/entities/5472656/map/markers/280053) |
| Dongun Hold | Донган Холд | T |
| Doorway to the Red Star | Ворота Красной Звезды | P: [каталог](https://pf2.ru/toponyms/doorway%20to%20the%20red%20star);  The Mwangi Expanse |
| Dortrot Ranch | Конный завод Дортрот | P: [каталог](https://pf2.ru/toponyms/dortrot%20ranch);  Knights of Lastwall |
| Dragon's Rib | Ребро Дракона | P: [каталог](https://pf2.ru/toponyms/dragon%27s%20rib); Путеводитель по региону Внутреннего Моря |
| Dragonfly River | Стрекозиная река | P: [каталог](https://pf2.ru/toponyms/dragonfly%20river); P + E: исправлено Стрекозинная |
| Dravod Knock | Дравод-Нок | P: [каталог](https://pf2.ru/toponyms/dravod%20knock); Путеводитель по региону Внутреннего Моря |
| Dread Dungeons | Ужасающие подземелья | K: [маркер 282787](https://app.kanka.io/w/227989/entities/5472656/map/markers/282787) |
| Drenchport | Дренчпорт | P: [каталог](https://pf2.ru/toponyms/drenchport); Путеводитель по региону Внутреннего Моря |
| Drezen | Дрезен | P: [каталог](https://pf2.ru/toponyms/drezen); Путеводитель по региону Внутреннего Моря |
| Driftwood | Дрифтвуд | P: [каталог](https://pf2.ru/toponyms/driftwood); Путеводитель по региону Внутреннего Моря |
| Droa River | Река Дроа | P: [каталог](https://pf2.ru/toponyms/droa%20river); Путеводитель по региону Внутреннего Моря |
| Droskar's Crag | Утёс Дроскара | T |
| Droskar's Crucible | Горнило Дроскара | P: [каталог](https://pf2.ru/toponyms/droskar%27s%20crucible);  Shining Kingdoms |
| Drowning Stones | Тонущие Камни | P: [каталог](https://pf2.ru/toponyms/drowning%20stones); Путеводитель по региону Внутреннего Моря |
| Druma | Друма | K: [маркер 282761](https://app.kanka.io/w/227989/entities/5472656/map/markers/282761) |
| Dunholme | Данхольм | P: [каталог](https://pf2.ru/toponyms/dunholme); Путеводитель по региону Внутреннего Моря |
| Duskshroud Forest | Лес Сумеречной Пелены | P: [каталог](https://pf2.ru/toponyms/duskshroud%20forest); Путеводитель по региону Внутреннего Моря |
| Dustpawn | Дастпон | P: [каталог](https://pf2.ru/toponyms/dustpawn); Путеводитель по региону Внутреннего Моря |
| Duwwor | Дювор | P: [каталог](https://pf2.ru/toponyms/duwwor); Путеводитель по миру |
| Dyinglight | Мертвосвет | P: [каталог](https://pf2.ru/toponyms/dyinglight); Путеводитель по миру |
| Dzimmi River | Река Дзимми | P: [каталог](https://pf2.ru/toponyms/dzimmi%20river);  The Mwangi Expanse |
| Eagle's Watch | Орлиный Дозор | P: [каталог](https://pf2.ru/toponyms/eagle%27s%20watch); Путеводитель по региону Внутреннего Моря |
| Earthnavel | Пуп Земли | P: [каталог](https://pf2.ru/toponyms/earthnavel); Путеводитель по региону Внутреннего Моря |
| East Rikkan | Восточный Риккан | P: [каталог](https://pf2.ru/toponyms/east%20rikkan); Путеводитель по региону Внутреннего Моря |
| East Sellen River | Река Восточный Селлен | P: [каталог](https://pf2.ru/toponyms/east%20sellen%20river); Путеводитель по миру |
| Ecanus | Эканус | P: [каталог](https://pf2.ru/toponyms/ecanus);  Impossible Lands |
| Echo Wood | Певучий лес | P: [каталог](https://pf2.ru/toponyms/echo%20wood); Путеводитель по региону Внутреннего Моря |
| Edme | Эдме | K: [маркер 282788](https://app.kanka.io/w/227989/entities/5472656/map/markers/282788) |
| Eel's Skull | Череп Угря | P: [каталог](https://pf2.ru/toponyms/eel%27s%20skull); Путеводитель по региону Внутреннего Моря |
| Egede | Эгеде | P: [каталог](https://pf2.ru/toponyms/egede); Путеводитель по региону Внутреннего Моря |
| Egelsee River | Река Эгельзее | P: [каталог](https://pf2.ru/toponyms/egelsee%20river); Путеводитель по региону Внутреннего Моря |
| Egorian | Эгориан | T |
| Eismonts | Эйсмонтс | P: [каталог](https://pf2.ru/toponyms/eismonts); Путеводитель по региону Внутреннего Моря |
| El-Fatar | Эль-Фатар | P: [каталог](https://pf2.ru/toponyms/el-fatar); Путеводитель по региону Внутреннего Моря |
| Elbistan | Элбистан | P: [каталог](https://pf2.ru/toponyms/elbistan);  Shining Kingdoms |
| Elemion River | Река Элемион | P: [каталог](https://pf2.ru/toponyms/elemion%20river);  Impossible Lands |
| Elesomare | Элесомар | P: [каталог](https://pf2.ru/toponyms/elesomare); Путеводитель по региону Внутреннего Моря |
| Elidir | Элидир | K: [маркер 277949](https://app.kanka.io/w/227989/entities/5472656/map/markers/277949) |
| Elistia | Элистия | P: [каталог](https://pf2.ru/toponyms/elistia);  Shining Kingdoms |
| Elokolobha | Элоколоба | P: [каталог](https://pf2.ru/toponyms/elokolobha);  The Mwangi Expanse |
| Elsekulp | Элсикальп | P: [каталог](https://pf2.ru/toponyms/elsekulp);  Shining Kingdoms |
| Elyon | Эльйон | K: [маркер 280054](https://app.kanka.io/w/227989/entities/5472656/map/markers/280054) |
| Embaral Ocean | Океан Эмбарала | P: [каталог](https://pf2.ru/toponyms/embaral%20ocean); Путеводитель по миру |
| Emberbough Forest | Обугленный лес | P: [каталог](https://pf2.ru/toponyms/emberbough%20forest); Путеводитель по региону Внутреннего Моря |
| Embeth Forest | Лес Эмбет | P: [каталог](https://pf2.ru/toponyms/embeth%20forest); Путеводитель по региону Внутреннего Моря |
| Endless Cairn | Бескрайний Могильник | P: [каталог](https://pf2.ru/toponyms/endless%20cairn);  Shining Kingdoms |
| Endowhar River | Река Эндовар | P: [каталог](https://pf2.ru/toponyms/endowhar%20river);  Shining Kingdoms |
| Erages | Эрэйжес | K: [маркер 338912](https://app.kanka.io/w/227989/entities/5472656/map/markers/338912) |
| Eranmas | Эранмас | K: [маркер 277934](https://app.kanka.io/w/227989/entities/5472656/map/markers/277934) |
| Erebus | Эреб | T |
| Erithiel's Hall | Зал Эритиэля | P: [каталог](https://pf2.ru/toponyms/erithiel%27s%20hall);  Shining Kingdoms |
| Escadar | Эскадар | K: [маркер 280048](https://app.kanka.io/w/227989/entities/5472656/map/markers/280048) |
| Estrovian Forest | Эстровианская чащоба | K: [маркер 260091](https://app.kanka.io/w/227989/entities/5472656/map/markers/260091) |
| Eternal Oasis | Вечный оазис | P: [каталог](https://pf2.ru/toponyms/eternal%20oasis); Путеводитель по региону Внутреннего Моря |
| Eto | Ито | P: [каталог](https://pf2.ru/toponyms/eto); Путеводитель по миру |
| Exalted Wood | Праведный лес | P: [каталог](https://pf2.ru/toponyms/exalted%20wood); Путеводитель по миру |
| Eye of Abendego | Око Абендего | T |
| Eye of Dread | Око ужаса | T |
| Falcon River | Соколиная река | P: [каталог](https://pf2.ru/toponyms/falcon%20river); Путеводитель по региону Внутреннего Моря |
| Falcon's Hollow | Соколиная лощина | P: [каталог](https://pf2.ru/toponyms/falcon%27s%20hollow);  Shining Kingdoms |
| Faldamont | Фалдамон | P: [каталог](https://pf2.ru/toponyms/faldamont); Путеводитель по региону Внутреннего Моря |
| Fangspire | Фэнгспайр | P: [каталог](https://pf2.ru/toponyms/fangspire); Путеводитель по региону Внутреннего Моря |
| Farsouth Mine | Шахта Фарзут | P: [каталог](https://pf2.ru/toponyms/farsouth%20mine); Путеводитель по региону Внутреннего Моря |
| Feasting Hall of Cayden Cailean | Зал пиршеств Кайдена Кайлина | P: [каталог](https://pf2.ru/toponyms/feasting%20hall%20of%20cayden%20cailean); P + E: исправлено праздненств |
| Feldgrau | Фельдгро | P: [каталог](https://pf2.ru/toponyms/feldgrau); Путеводитель по региону Внутреннего Моря |
| Felldales | Гиблые долины | P: [каталог](https://pf2.ru/toponyms/felldales); Путеводитель по региону Внутреннего Моря |
| Fenwall Mountains | Болотная гряда | P: [каталог](https://pf2.ru/toponyms/fenwall%20mountains); Путеводитель по региону Внутреннего Моря |
| Fever Sea | Лихорадящее море | K: [маркер 252254](https://app.kanka.io/w/227989/entities/5472656/map/markers/252254) |
| Fey Glade | Полянка фей | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `e1c5b938-00cd-44b5-b4a1-469b9d1025a3` |
| Field of Maidens | Поле Дев | P: [каталог](https://pf2.ru/toponyms/field%20of%20maidens);  Impossible Lands |
| Fields of Chelam | Шеламские поля | P: [каталог](https://pf2.ru/toponyms/fields%20of%20chelam); Путеводитель по региону Внутреннего Моря |
| Fields of Jaadja | Поля Яаджи | P: [каталог](https://pf2.ru/toponyms/fields%20of%20jaadja);  Impossible Lands |
| Fierani Forest | Лес Фиерани | K: [маркер 282757](https://app.kanka.io/w/227989/entities/5472656/map/markers/282757) |
| Finder's Gulch | Ущелье искателя | K: [маркер 281701](https://app.kanka.io/w/227989/entities/5472656/map/markers/281701) |
| Finderplain | Фандерплейн | P: [каталог](https://pf2.ru/toponyms/finderplain); Путеводитель по региону Внутреннего Моря |
| Firewatch Peaks | Дозорные горы | P: [каталог](https://pf2.ru/toponyms/firewatch%20peaks); Путеводитель по региону Внутреннего Моря |
| First Step | Первая Ступень | P: [каталог](https://pf2.ru/toponyms/first%20step); Путеводитель по миру |
| Five Kings Mountains | Горы Пяти Королей | P: [каталог](https://pf2.ru/toponyms/five%20kings%20mountains);  Shining Kingdoms |
| Flesk | Флеск | K: [маркер 280059](https://app.kanka.io/w/227989/entities/5472656/map/markers/280059) |
| Flintyreach | Флинтайрич | P: [каталог](https://pf2.ru/toponyms/flintyreach); Путеводитель по региону Внутреннего Моря |
| Fog Peaks | Туманные вершины | K: [маркер 282786](https://app.kanka.io/w/227989/entities/5472656/map/markers/282786) |
| Fogscar Mountains | Горы Туманных Шрамов | P: [каталог](https://pf2.ru/toponyms/fogscar%20mountains); Путеводитель по региону Внутреннего Моря |
| Footprints of Rovagug | Следы Ровагуга | P: [каталог](https://pf2.ru/toponyms/footprints%20of%20rovagug); Путеводитель по региону Внутреннего Моря |
| Forest of Spirits | Лес Духов | P: [каталог](https://pf2.ru/toponyms/forest%20of%20spirits); Тянь-Ша. Путеводитель по миру |
| Forest of Trials | Лес Испытаний | T |
| Forgotten Track | Забытая Тропа | P: [каталог](https://pf2.ru/toponyms/forgotten%20track); Путеводитель по миру |
| Fort Bandu | Форт Банду | P: [каталог](https://pf2.ru/toponyms/fort%20bandu);  The Mwangi Expanse |
| Fort Drelev | Форт Дрелев | R: [source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst:429](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst#L429) |
| Fort Landing | Форт Место высадки | K: [маркер 277932](https://app.kanka.io/w/227989/entities/5472656/map/markers/277932) |
| Fort Liberthane | Форт Либертан | P: [каталог](https://pf2.ru/toponyms/fort%20liberthane); Путеводитель по региону Внутреннего Моря |
| Fort Ramgate | Форт Рамгейт | P: [каталог](https://pf2.ru/toponyms/fort%20ramgate); Путеводитель по региону Внутреннего Моря |
| Free Station | Вольная Стоянка | P: [каталог](https://pf2.ru/toponyms/free%20station); Путеводитель по региону Внутреннего Моря |
| Frogmarch River | Река Лягушачий Скок | P: [каталог](https://pf2.ru/toponyms/frogmarch%20river);  The Mwangi Expanse |
| Frostmire Fen | Мёрзлая трясина | P: [каталог](https://pf2.ru/toponyms/frostmire%20fen); Путеводитель по миру |
| Fusil | Фузиль | P: [каталог](https://pf2.ru/toponyms/fusil);  Shining Kingdoms |
| Galduria | Галдурия | P: [каталог](https://pf2.ru/toponyms/galduria); Путеводитель по региону Внутреннего Моря |
| Galizhur | Галижур | K: [маркер 280052](https://app.kanka.io/w/227989/entities/5472656/map/markers/280052) |
| Gallowspire | Гэллоуспайр | T |
| Galt | Голт | T |
| Ganda-Uj | Ганда-Удж | P: [каталог](https://pf2.ru/toponyms/ganda-uj); Путеводитель по региону Внутреннего Моря |
| Ganderhal's Lair | Логово Гандерала | P: [каталог](https://pf2.ru/toponyms/ganderhal%27s%20lair); Путеводитель по региону Внутреннего Моря |
| Garden of Lead | Сад Свинца | P: [каталог](https://pf2.ru/toponyms/garden%20of%20lead); Путеводитель по региону Внутреннего Моря |
| Gardens of Shepeska | Сады Шепески | P: [каталог](https://pf2.ru/toponyms/gardens%20of%20shepeska); P + E: родительный падеж имени Шепеска |
| Garund | Гарунд | C |
| Geb | Геб | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:627](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L627) |
| Geb's Rest | Привал Геба | P: [каталог](https://pf2.ru/toponyms/geb%27s%20rest);  Impossible Lands |
| Gembasket | Узорочье | P: [каталог](https://pf2.ru/toponyms/gembasket); Путеводитель по региону Внутреннего Моря |
| Gemcrown Bay | Драгоценная бухта | P: [каталог](https://pf2.ru/toponyms/gemcrown%20bay); Путеводитель по региону Внутреннего Моря |
| Gensmaren | Генсмарен | P: [каталог](https://pf2.ru/toponyms/gensmaren); Путеводитель по региону Внутреннего Моря |
| Ghasterhall | Гастерхолл | P: [каталог](https://pf2.ru/toponyms/ghasterhall);  Knights of Lastwall |
| Ghataking | Гатакаин | P: [каталог](https://pf2.ru/toponyms/ghataking); Путеводитель по региону Внутреннего Моря |
| Gho Vella | Го-Велла | P: [каталог](https://pf2.ru/toponyms/gho%20vella);  Impossible Lands |
| Ghostlight Marsh | Болото Блуждающих Огней | P: [каталог](https://pf2.ru/toponyms/ghostlight%20marsh); Путеводитель по региону Внутреннего Моря |
| Gillamoor | Гилламур | K: [маркер 281697](https://app.kanka.io/w/227989/entities/5472656/map/markers/281697) |
| Ginji Mesa | Столовая гора Гинджи | P: [каталог](https://pf2.ru/toponyms/ginji%20mesa); Путеводитель по региону Внутреннего Моря |
| Gjurn River | Река Гьюрн | P: [каталог](https://pf2.ru/toponyms/gjurn%20river); Путеводитель по региону Внутреннего Моря |
| Glacier Lake | Ледниковое озеро | P: [каталог](https://pf2.ru/toponyms/glacier%20lake); Путеводитель по региону Внутреннего Моря |
| Glass River | Стеклянная река | P: [каталог](https://pf2.ru/toponyms/glass%20river); Путеводитель по региону Внутреннего Моря |
| Glasswall Isle | Остров Стеклянная Стена | P: [каталог](https://pf2.ru/toponyms/glasswall%20isle); Путеводитель по региону Внутреннего Моря |
| Glazen Sheets | Стеклянные равнины | P: [каталог](https://pf2.ru/toponyms/glazen%20sheets); Путеводитель по региону Внутреннего Моря |
| Glimmerhold | Глиммерхолд | P: [каталог](https://pf2.ru/toponyms/glimmerhold); Путеводитель по региону Внутреннего Моря |
| Goka | Гока | P: [каталог](https://pf2.ru/toponyms/goka); Тянь-Ша. Путеводитель по миру |
| Golden Road | Золотой путь | T |
| Goldenrun River | Река Золотянка | P: [каталог](https://pf2.ru/toponyms/goldenrun%20river); Путеводитель по региону Внутреннего Моря |
| Golsifar | Голсифар | P: [каталог](https://pf2.ru/toponyms/golsifar);  Shining Kingdoms |
| Golushkin Mountains | Голушкинские горы | P: [каталог](https://pf2.ru/toponyms/golushkin%20mountains); Путеводитель по региону Внутреннего Моря |
| Gorum Pots | Котлы Горума | P: [каталог](https://pf2.ru/toponyms/gorum%20pots); Путеводитель по региону Внутреннего Моря |
| Gozreh's Pool | Купальня Гозрея | P: [каталог](https://pf2.ru/toponyms/gozreh%27s%20pool); P + E: родительный падеж имени Гозрей |
| Graidmere Swamp | Болото Грейдмер | P: [каталог](https://pf2.ru/toponyms/graidmere%20swamp); Путеводитель по региону Внутреннего Моря |
| Gralton | Гралтон | P: [каталог](https://pf2.ru/toponyms/gralton); Путеводитель по региону Внутреннего Моря |
| Grand Sarret | Великий Саррет | P: [каталог](https://pf2.ru/toponyms/grand%20sarret);  Impossible Lands |
| Gravelands | Могильные Земли | T |
| Gray River | Серая река | P: [каталог](https://pf2.ru/toponyms/gray%20river); Путеводитель по региону Внутреннего Моря |
| Graydirge | Поминальная Песнь | P: [каталог](https://pf2.ru/toponyms/graydirge);  Impossible Lands |
| Grayhaven | Грейхейвен | P: [каталог](https://pf2.ru/toponyms/grayhaven); Путеводитель по региону Внутреннего Моря |
| Great Goldpan River | Великая Золотоносная река | P: [каталог](https://pf2.ru/toponyms/great%20goldpan%20river);  Shining Kingdoms |
| Greenblood | Зеленокровье | P: [каталог](https://pf2.ru/toponyms/greenblood); Путеводитель по региону Внутреннего Моря |
| Greengold | Зеленозлат | K: [маркер 282753](https://app.kanka.io/w/227989/entities/5472656/map/markers/282753) |
| Gronzi Forest | Лес Гронзи | P: [каталог](https://pf2.ru/toponyms/gronzi%20forest); Путеводитель по региону Внутреннего Моря |
| Grungir Forest | Грунгирский лес | K: [маркер 259855](https://app.kanka.io/w/227989/entities/5472656/map/markers/259855) |
| Gudrin River | Река Свирь | P: [каталог](https://pf2.ru/toponyms/gudrin%20river); Серия приключений Kingmaker |
| Guiltspur | Гилтспур | P: [каталог](https://pf2.ru/toponyms/guiltspur); Путеводитель по региону Внутреннего Моря |
| Gulf of Accord | Залив Согласия | P: [каталог](https://pf2.ru/toponyms/gulf%20of%20accord);  Shining Kingdoms |
| Gullik River | Река Гулик | P: [каталог](https://pf2.ru/toponyms/gullik%20river); Путеводитель по региону Внутреннего Моря |
| Gundrun | Гундрун | K: [маркер 260089](https://app.kanka.io/w/227989/entities/5472656/map/markers/260089) |
| Gunworks | Оружейня | P: [каталог](https://pf2.ru/toponyms/gunworks);  Impossible Lands |
| Gurat | Гурат | K: [маркер 312098](https://app.kanka.io/w/227989/entities/5472656/map/markers/312098) |
| Hajoth Hakados | Хайот Хакадос | K: [маркер 260097](https://app.kanka.io/w/227989/entities/5472656/map/markers/260097) |
| Halana Theocracy | Халанская Теократия | P: [каталог](https://pf2.ru/toponyms/halana%20theocracy); Пушки и шестерни |
| Haldun | Хальдун | P: [каталог](https://pf2.ru/toponyms/haldun); Путеводитель по миру |
| Halgrim | Халгрим | K: [маркер 259860](https://app.kanka.io/w/227989/entities/5472656/map/markers/259860) |
| Halikarnassos Hills | Холмы Халикарнас | P: [каталог](https://pf2.ru/toponyms/halikarnassos%20hills); Путеводитель по региону Внутреннего Моря |
| Hallein Town | Посёлок Халлейн | P: [каталог](https://pf2.ru/toponyms/hallein%20town);  Knights of Lastwall |
| Halmyris | Хальмирис | P: [каталог](https://pf2.ru/toponyms/halmyris); Путеводитель по региону Внутреннего Моря |
| Halvon | Алвон | P: [каталог](https://pf2.ru/toponyms/halvon);  Shining Kingdoms |
| Hammer Rock | Молот-скала | P: [каталог](https://pf2.ru/toponyms/hammer%20rock);  Knights of Lastwall |
| Hanging City of Teskra | Висячий город Тескра | P: [каталог](https://pf2.ru/toponyms/hanging%20city%20of%20teskra); Путеводитель по региону Внутреннего Моря |
| Harse | Харс | P: [каталог](https://pf2.ru/toponyms/harse); Путеводитель по региону Внутреннего Моря |
| Haseong | Хасон | P: [каталог](https://pf2.ru/toponyms/haseong); Тянь-Ша. Путеводитель по миру |
| Hatavit | Хатавит | P: [каталог](https://pf2.ru/toponyms/hatavit); Путеводитель по региону Внутреннего Моря |
| Haugin's Ear | Хогиново Ухо | P: [каталог](https://pf2.ru/toponyms/haugin%E2%80%99s%20ear); Путеводитель по региону Внутреннего Моря |
| Hawk's Nest | Ястребинное Гнездо | P: [каталог](https://pf2.ru/toponyms/hawk%27s%20nest); Путеводитель по региону Внутреннего Моря |
| Hazrak | Хазрак | K: [маркер 280063](https://app.kanka.io/w/227989/entities/5472656/map/markers/280063) |
| He Ming | Хэ Мин | P: [каталог](https://pf2.ru/toponyms/he%20ming); Тянь-Ша. Путеводитель по миру |
| Heibarr | Хейбарр | P: [каталог](https://pf2.ru/toponyms/heibarr); Путеводитель по региону Внутреннего Моря |
| Hell Harbor | Чёртова Гавань | P: [каталог](https://pf2.ru/toponyms/hell%20harbor); Путеводитель по миру |
| Hellmouth Gulf | Залив Врата Преисподней | P: [каталог](https://pf2.ru/toponyms/hellmouth%20gulf); Путеводитель по миру |
| Hemlock Island | Островок болиголова | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `bf3b9ab6-7620-4460-b337-4f4c5a2ac018` |
| Hermea | Эрмея | T |
| Herne's Oak | Дуб Герне | P: [каталог](https://pf2.ru/toponyms/herne%27s%20oak); Путеводитель по региону Внутреннего Моря |
| High Seas | Открытое Море | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:606](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L606) |
| Highdelve | Хайделв | P: [каталог](https://pf2.ru/toponyms/highdelve); Путеводитель по региону Внутреннего Моря |
| Highhelm | Хайхельм | K: [маркер 282764](https://app.kanka.io/w/227989/entities/5472656/map/markers/282764) |
| Hillcross | Хиллкросс | K: [маркер 259863](https://app.kanka.io/w/227989/entities/5472656/map/markers/259863) |
| Hinji | Хинджи | P: [каталог](https://pf2.ru/toponyms/hinji); Путеводитель по региону Внутреннего Моря |
| Hisuikarasu | Хисуикарасу | P: [каталог](https://pf2.ru/toponyms/hisuikarasu); Тянь-Ша. Путеводитель по миру |
| Hoarwood | Седолесье | P: [каталог](https://pf2.ru/toponyms/hoarwood); Путеводитель по региону Внутреннего Моря |
| Hoarwood Forest | Седой лес | P: [каталог](https://pf2.ru/toponyms/hoarwood%20forest); Путеводитель по региону Внутреннего Моря |
| Hollow Mountain | Пустая гора | P: [каталог](https://pf2.ru/toponyms/hollow%20mountain); Путеводитель по региону Внутреннего Моря |
| Holomog | Холомог | P: [каталог](https://pf2.ru/toponyms/holomog); Война бессмертных |
| Holvirgang | Хольвирганг | P: [каталог](https://pf2.ru/toponyms/holvirgang); Путеводитель по региону Внутреннего Моря |
| Holy Xatramba | Священная Ксатрамба | P: [каталог](https://pf2.ru/toponyms/holy%20xatramba);  The Mwangi Expanse |
| Hongal | Хонгал | P: [каталог](https://pf2.ru/toponyms/hongal); Тянь-Ша. Путеводитель по миру |
| Hook Mountain | Крюковая гора | P: [каталог](https://pf2.ru/toponyms/hook%20mountain); Путеводитель по региону Внутреннего Моря |
| Hooktongue Slough | Крючковатые топи | P: [каталог](https://pf2.ru/toponyms/hooktongue%20slough); Серия приключений Kingmaker |
| Hope Lost | Утраченная Надежда | P: [каталог](https://pf2.ru/toponyms/hope%20lost); Путеводитель по региону Внутреннего Моря |
| Horun Plain | Равнина Хорун | P: [каталог](https://pf2.ru/toponyms/horun%20plain);  Shining Kingdoms |
| House Garess | Дом Гаресс | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `fc211206-d0c1-4352-bf24-508b8155a1c0` |
| House Lebeda | Дом Лебеда | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `76fe5a54-3fde-4d3d-b284-be983db5e7fa` |
| House Lodovka | Дом Лодовка | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `c5a985c2-a242-4476-9357-c78fa84e85b5` |
| House Medvyed | Дом Медведь | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `bd09fd26-e626-48ce-bf7e-145f4135ff07` |
| House Orlovsky | Дом Орловский | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `657f380c-76ee-466b-94b3-417ceb4ed5dd` |
| House Rogarvia | Дом Рогарвия | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `de9cd8bd-ec58-4c75-a839-60a960122bba` |
| House Surtova | Дом Суртова | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `9a2b6ecd-9b60-4be7-9d92-da1aeaacf586` |
| House of Lies | Дом Лжи | P: [каталог](https://pf2.ru/toponyms/house%20of%20lies); Путеводитель по региону Внутреннего Моря |
| House of Oblivion | Дом Забвения | P: [каталог](https://pf2.ru/toponyms/house%20of%20oblivion); Путеводитель по миру, Война бессмертных |
| House of Sky | Небесный Дом | P: [каталог](https://pf2.ru/toponyms/house%20of%20sky);  Shining Kingdoms |
| Hungry Maw River | Река Голодная Пасть | P: [каталог](https://pf2.ru/toponyms/hungry%20maw%20river); Путеводитель по региону Внутреннего Моря |
| Hungry Mountains | Голодные горы | P: [каталог](https://pf2.ru/toponyms/hungry%20mountains); Путеводитель по региону Внутреннего Моря |
| Hunthul | Хунтул | K: [маркер 277944](https://app.kanka.io/w/227989/entities/5472656/map/markers/277944) |
| Hwanggot | Хванггот | P: [каталог](https://pf2.ru/toponyms/hwanggot); Тянь-Ша. Путеводитель по миру |
| Hymbria | Химбрия | P: [каталог](https://pf2.ru/toponyms/hymbria); Путеводитель по региону Внутреннего Моря |
| Iadara | Иадара | K: [маркер 282754](https://app.kanka.io/w/227989/entities/5472656/map/markers/282754) |
| Iadenveigh | Иаденвей | P: [каталог](https://pf2.ru/toponyms/iadenveigh); Путеводитель по региону Внутреннего Моря |
| Iblydos | Иблидос | T |
| Ice Spire | Ледяной шпиль | K: [маркер 259857](https://app.kanka.io/w/227989/entities/5472656/map/markers/259857) |
| Icemark | Ледяной предел | P: [каталог](https://pf2.ru/toponyms/icemark); Путеводитель по миру |
| Icerift Castle | Дворец в Ледяном ущелье | K: [маркер 277918](https://app.kanka.io/w/227989/entities/5472656/map/markers/277918) |
| Icerime Peaks | Инеистые пики | P: [каталог](https://pf2.ru/toponyms/icerime%20peaks); P + E: нормализована форма прилагательного |
| Icerime River | Инеистая река | P: [каталог](https://pf2.ru/toponyms/icerime%20river); P + E: нормализована форма прилагательного |
| Icestair | Айсстэр | K: [маркер 259862](https://app.kanka.io/w/227989/entities/5472656/map/markers/259862) |
| Ilizmagorti | Илизмагорти | T |
| Illani Plains | Равнины Иллани | P: [каталог](https://pf2.ru/toponyms/illani%20plains); Пушки и шестерни |
| Illmarsh | Иллмарш | K: [маркер 277929](https://app.kanka.io/w/227989/entities/5472656/map/markers/277929) |
| Ilsurian | Илсуриан | P: [каталог](https://pf2.ru/toponyms/ilsurian); Путеводитель по региону Внутреннего Моря |
| Impossible Lands | Невозможные земли | T |
| Inkwater River | Чернильная река | P: [каталог](https://pf2.ru/toponyms/inkwater%20river); Путеводитель по региону Внутреннего Моря |
| Inner Sea | Внутреннее море | C |
| Iobaria | Иобария | P: [каталог](https://pf2.ru/toponyms/iobaria); Основная книга ведущего |
| Ipeq | Ипек | P: [каталог](https://pf2.ru/toponyms/ipeq); Путеводитель по миру |
| Irim | Ирим | K: [маркер 281682](https://app.kanka.io/w/227989/entities/5472656/map/markers/281682) |
| Iron Peaks | Железные пики | P: [каталог](https://pf2.ru/toponyms/iron%20peaks); Путеводитель по региону Внутреннего Моря |
| Iron Rose | Железная Роза | P: [каталог](https://pf2.ru/toponyms/iron%20rose); Война бессмертных |
| Ironbound Archipelago | Железный Архипелаг | T |
| Irrere | Иррер | P: [каталог](https://pf2.ru/toponyms/irrere); Путеводитель по региону Внутреннего Моря |
| Irrisen | Иррисен | T |
| Isarn | Исарн | K: [маркер 282790](https://app.kanka.io/w/227989/entities/5472656/map/markers/282790) |
| Iscadero Island | Остров Искадеро | P: [каталог](https://pf2.ru/toponyms/iscadero%20island); Пушки и шестерни |
| Isger | Исгер | P: [каталог](https://pf2.ru/toponyms/isger); P; также форма в начале статьи русской вики |
| Isle of Arenway | Остров Аренвей | P: [каталог](https://pf2.ru/toponyms/isle%20of%20arenway);  Shining Kingdoms |
| Isle of Black Palms | Остров Чёрных Пальм | P: [каталог](https://pf2.ru/toponyms/isle%20of%20black%20palms);  Impossible Lands |
| Isle of Erran | Остров Эрран | K: [маркер 280043](https://app.kanka.io/w/227989/entities/5472656/map/markers/280043) |
| Isle of Kortos | Остров Кортос | K: [маркер 280061](https://app.kanka.io/w/227989/entities/5472656/map/markers/280061) |
| Isle of Terror | Остров ужаса | K: [маркер 277931](https://app.kanka.io/w/227989/entities/5472656/map/markers/277931) |
| Ivory Sea | Море Слоновой Кости | P: [каталог](https://pf2.ru/toponyms/ivory%20sea); Тянь-Ша. Путеводитель по миру |
| Iz | Из | P: [каталог](https://pf2.ru/toponyms/iz); Путеводитель по миру |
| Jaadja River | Река Яаджа | P: [каталог](https://pf2.ru/toponyms/jaadja%20river);  Impossible Lands |
| Jagged Reach | Зубчатый Берег | P: [каталог](https://pf2.ru/toponyms/jagged%20reach); Путеводитель по региону Внутреннего Моря |
| Jagged Saw | Острые Зубья | P: [каталог](https://pf2.ru/toponyms/jagged%20saw);  Shining Kingdoms |
| Jaha | Джаха | P: [каталог](https://pf2.ru/toponyms/jaha);  The Mwangi Expanse, Война бессмертных |
| Jalmeray | Джалмерэй | T |
| Jalrune River | Река Джалруна | P: [каталог](https://pf2.ru/toponyms/jalrune%20river); Путеводитель по региону Внутреннего Моря |
| Janderhoff | Джандерхофф | K: [маркер 259836](https://app.kanka.io/w/227989/entities/5472656/map/markers/259836) |
| Jeggare River | Река Джегаре | P: [каталог](https://pf2.ru/toponyms/jeggare%20river); Путеводитель по региону Внутреннего Моря |
| Jellicoe Bay | Залив Джеллико | P: [каталог](https://pf2.ru/toponyms/jellicoe%20bay); Путеводитель по миру |
| Jeopardy Bay | Опасный залив | P: [каталог](https://pf2.ru/toponyms/jeopardy%20bay); Путеводитель по региону Внутреннего Моря |
| Jinin | Джинин | T |
| Jodin River | Река Йодин | P: [каталог](https://pf2.ru/toponyms/jodin%20river); Путеводитель по региону Внутреннего Моря |
| Jol | Джол | K: [маркер 259859](https://app.kanka.io/w/227989/entities/5472656/map/markers/259859) |
| Jorgenfist | Йоргенфист | P: [каталог](https://pf2.ru/toponyms/jorgenfist); Путеводитель по региону Внутреннего Моря |
| Jovvox | Джоввокс | P: [каталог](https://pf2.ru/toponyms/jovvox); Путеводитель по региону Внутреннего Моря |
| Jula | Джула | P: [каталог](https://pf2.ru/toponyms/jula);  The Mwangi Expanse |
| Jundlan Wrecks | Обломки Юндлана | K: [маркер 277917](https://app.kanka.io/w/227989/entities/5472656/map/markers/277917) |
| Junira River | Река Юнира | P: [каталог](https://pf2.ru/toponyms/junira%20river); Путеводитель по миру, Война бессмертных |
| Juviler Hills | Холмы Жувилье | P: [каталог](https://pf2.ru/toponyms/juviler%20hills); Путеводитель по региону Внутреннего Моря |
| Kaava Lands | Земли Каава | P: [каталог](https://pf2.ru/toponyms/kaava%20lands); Путеводитель по миру,  The Mwangi Expanse |
| Kaer Maga | Каэр Мага | K: [маркер 259837](https://app.kanka.io/w/227989/entities/5472656/map/markers/259837) |
| Kaina Katakha | Кайна-Катакка | P: [каталог](https://pf2.ru/toponyms/kaina%20katakha);  Impossible Lands |
| Kallas Lake | Озеро Каллас | P: [каталог](https://pf2.ru/toponyms/kallas%20lake); Путеводитель по региону Внутреннего Моря |
| Kallow Mounds | Курганы Кэллоу | P: [каталог](https://pf2.ru/toponyms/kallow%20mounds); Путеводитель по региону Внутреннего Моря |
| Kalsgard | Калсгард | K: [маркер 249887](https://app.kanka.io/w/227989/entities/5472656/map/markers/249887) |
| Kalva | Кальва | P: [каталог](https://pf2.ru/toponyms/kalva); Путеводитель по региону Внутреннего Моря |
| Kantaria | Кантария | P: [каталог](https://pf2.ru/toponyms/kantaria); Путеводитель по региону Внутреннего Моря |
| Kantele River | Река Кантель | P: [каталог](https://pf2.ru/toponyms/kantele%20river);  Shining Kingdoms |
| Kaoling | Каолин | T |
| Karakuru | Каракуру | P: [каталог](https://pf2.ru/toponyms/karakuru); Путеводитель по региону Внутреннего Моря |
| Karcau | Каркау | K: [маркер 277939](https://app.kanka.io/w/227989/entities/5472656/map/markers/277939) |
| Kardaji Bay | Залив Кардаджи | P: [каталог](https://pf2.ru/toponyms/kardaji%20bay); Война бессмертных |
| Kasai | Касай | P: [каталог](https://pf2.ru/toponyms/kasai); Тянь-Ша. Путеводитель по миру |
| Kassen | Кассен | P: [каталог](https://pf2.ru/toponyms/kassen); Путеводитель по региону Внутреннего Моря |
| Katapesh | Катапеш | K: [маркер 330207](https://app.kanka.io/w/227989/entities/5472656/map/markers/330207) |
| Katheer | Катир | T |
| Kazaron River | Река Казарон | P: [каталог](https://pf2.ru/toponyms/kazaron%20river); Путеводитель по региону Внутреннего Моря |
| Kelesh | Келиш | P: [каталог](https://pf2.ru/toponyms/kelesh); Путеводитель по миру |
| Kelmarane | Кельмаран | P: [каталог](https://pf2.ru/toponyms/kelmarane); Путеводитель по региону Внутреннего Моря |
| Kenabres | Кенабрес | P: [каталог](https://pf2.ru/toponyms/kenabres); Путеводитель по региону Внутреннего Моря |
| Kerrick | Керрик | K: [маркер 280055](https://app.kanka.io/w/227989/entities/5472656/map/markers/280055) |
| Kerse | Керс | K: [маркер 282760](https://app.kanka.io/w/227989/entities/5472656/map/markers/282760) |
| Kestrel River | Река Кестрел | P: [каталог](https://pf2.ru/toponyms/kestrel%20river); Путеводитель по региону Внутреннего Моря |
| Ketz Desert | Пустыня Кец | P: [каталог](https://pf2.ru/toponyms/ketz%20desert); Путеводитель по региону Внутреннего Моря |
| Khari | Кхари | P: [каталог](https://pf2.ru/toponyms/khari); Путеводитель по миру |
| Kho-Rarne Pass | Перевал Кхо-Рарн | P: [каталог](https://pf2.ru/toponyms/kho-rarne%20pass); Путеводитель по региону Внутреннего Моря |
| Khoka | Кхока | P: [каталог](https://pf2.ru/toponyms/khoka); Путеводитель по региону Внутреннего Моря |
| Khulo | Кхуло | P: [каталог](https://pf2.ru/toponyms/khulo);  Impossible Lands |
| Kibwe | Кибве | P: [каталог](https://pf2.ru/toponyms/kibwe);  The Mwangi Expanse, Война бессмертных |
| Kingfisher River | Река Зимородка | P: [каталог](https://pf2.ru/toponyms/kingfisher%20river); Путеводитель по региону Внутреннего Моря |
| Kintargo | Кинтарго | K: [маркер 277947](https://app.kanka.io/w/227989/entities/5472656/map/markers/277947) |
| Kiravoy River | Река Киравой | P: [каталог](https://pf2.ru/toponyms/kiravoy%20river); Серия приключений Kingmaker |
| Klarwa Fountain | Фонтан Кларвы | P: [каталог](https://pf2.ru/toponyms/klarwa%20fountain); Путеводитель по региону Внутреннего Моря |
| Kodar Mountains | Кодарский хребет | K: [маркер 255048](https://app.kanka.io/w/227989/entities/5472656/map/markers/255048) |
| Kokutang | Кокутанг | P: [каталог](https://pf2.ru/toponyms/kokutang);  The Mwangi Expanse |
| Koor | Куур | P: [каталог](https://pf2.ru/toponyms/koor); Путеводитель по региону Внутреннего Моря |
| Kopparberget | Коппарбергет | P: [каталог](https://pf2.ru/toponyms/kopparberget); Путеводитель по региону Внутреннего Моря |
| Korholm | Корхолм | K: [маркер 277935](https://app.kanka.io/w/227989/entities/5472656/map/markers/277935) |
| Kortos Mounts | Горы Кортос | K: [маркер 280065](https://app.kanka.io/w/227989/entities/5472656/map/markers/280065) |
| Korvosa | Корвоса | K: [маркер 259820](https://app.kanka.io/w/227989/entities/5472656/map/markers/259820) |
| Kovlar | Ковлар | P: [каталог](https://pf2.ru/toponyms/kovlar);  Shining Kingdoms |
| Kozan | Козан | P: [каталог](https://pf2.ru/toponyms/kozan); Путеводитель по региону Внутреннего Моря |
| Kraggodan | Краггодан | K: [маркер 277936](https://app.kanka.io/w/227989/entities/5472656/map/markers/277936) |
| Kravenkus | Кравенкус | P: [каталог](https://pf2.ru/toponyms/kravenkus);  Shining Kingdoms |
| Kwanlai | Кванлай | P: [каталог](https://pf2.ru/toponyms/kwanlai); Тянь-Ша. Путеводитель по миру |
| Kyonin | Кьонин | T |
| Kyonin River | Река Кионин | P: [каталог](https://pf2.ru/toponyms/kyonin%20river);  Shining Kingdoms |
| Lackthroat | Горлодёры | P: [каталог](https://pf2.ru/toponyms/lackthroat); Путеводитель по региону Внутреннего Моря |
| Laekastel | Лекастель | P: [каталог](https://pf2.ru/toponyms/laekastel); Путеводитель по региону Внутреннего Моря |
| Lair of Fafnheir | Логово Фафнейра | P: [каталог](https://pf2.ru/toponyms/lair%20of%20fafnheir); Путеводитель по региону Внутреннего Моря |
| Lake Encarthan | Озеро Энкартан | K: [маркер 277933](https://app.kanka.io/w/227989/entities/5472656/map/markers/277933) |
| Lake Hooktongue | Крючковатое озеро | P: [каталог](https://pf2.ru/toponyms/lake%20hooktongue); Серия приключений Kingmaker |
| Lake Kavapesta | Озеро Кавапеста | P: [каталог](https://pf2.ru/toponyms/lake%20kavapesta); Путеводитель по региону Внутреннего Моря |
| Lake Lias | Озеро Лиас | P: [каталог](https://pf2.ru/toponyms/lake%20lias); Путеводитель по региону Внутреннего Моря |
| Lake Ocota | Озеро Окота | K: [маркер 252250](https://app.kanka.io/w/227989/entities/5472656/map/markers/252250) |
| Lake Prophyria | Озеро Профирия | P: [каталог](https://pf2.ru/toponyms/lake%20prophyria); Путеводитель по региону Внутреннего Моря |
| Lake Raiteso | Озеро Райтезо | P: [каталог](https://pf2.ru/toponyms/lake%20raiteso); Путеводитель по региону Внутреннего Моря |
| Lake Reykal | Озеро Рейкаль | P: [каталог](https://pf2.ru/toponyms/lake%20reykal); Путеводитель по региону Внутреннего Моря |
| Lake Silverstep | Озеро Серебристый след | P: [каталог](https://pf2.ru/toponyms/lake%20silverstep); Серия приключений Kingmaker |
| Lake Sorrow | Озеро Скорби | P: [каталог](https://pf2.ru/toponyms/lake%20sorrow); Путеводитель по региону Внутреннего Моря |
| Lake Tapipallati | Озеро Тапипаллати | P: [каталог](https://pf2.ru/toponyms/lake%20tapipallati); Пушки и шестерни |
| Lake Ustradi | Озеро Устради | P: [каталог](https://pf2.ru/toponyms/lake%20ustradi);  Impossible Lands |
| Lake of Mists and Veils | Озеро туманных вуалей | K: [маркер 260094](https://app.kanka.io/w/227989/entities/5472656/map/markers/260094) |
| Lake of Vanished Armies | Озеро Сгинувших Армий | P: [каталог](https://pf2.ru/toponyms/lake%20of%20vanished%20armies); Путеводитель по региону Внутреннего Моря |
| Lamasara | Ламасара | P: [каталог](https://pf2.ru/toponyms/lamasara); Путеводитель по миру |
| Lamashtu's Flower | Цветок Ламашту | P: [каталог](https://pf2.ru/toponyms/lamashtu%27s%20flower); Путеводитель по региону Внутреннего Моря |
| Lambreth | Ламбрет | P: [каталог](https://pf2.ru/toponyms/lambreth); Путеводитель по региону Внутреннего Моря |
| Lampblack River | Сажевая река | P: [каталог](https://pf2.ru/toponyms/lampblack%20river); Путеводитель по региону Внутреннего Моря |
| Lands of the Linnorm Kings | Земли Королей Линнормов | T |
| Lantern Lake | Фонарное озеро | P: [каталог](https://pf2.ru/toponyms/lantern%20lake); Путеводитель по региону Внутреннего Моря |
| Larrad | Ларрад | P: [каталог](https://pf2.ru/toponyms/larrad);  Shining Kingdoms |
| Lasinavel | Лазинавэль | K: [маркер 338913](https://app.kanka.io/w/227989/entities/5472656/map/markers/338913) |
| Lastwall | Последний Оплот | P: [каталог](https://pf2.ru/toponyms/lastwall);  Knights of Lastwall |
| Laughing Jungle | Хохочущие джунгли | P: [каталог](https://pf2.ru/toponyms/laughing%20jungle);  The Mwangi Expanse |
| Lavieton | Лавиетон | P: [каталог](https://pf2.ru/toponyms/lavieton);  Shining Kingdoms |
| Lepidstadt | Лепидштадт | K: [маркер 277924](https://app.kanka.io/w/227989/entities/5472656/map/markers/277924) |
| Lethaquel | Летакель | P: [каталог](https://pf2.ru/toponyms/lethaquel);  Shining Kingdoms |
| Leydis | Лейдис | K: [маркер 260098](https://app.kanka.io/w/227989/entities/5472656/map/markers/260098) |
| Lightning Stones | Камни Молний | P: [каталог](https://pf2.ru/toponyms/lightning%20stones); Путеводитель по региону Внутреннего Моря |
| Lightning's Call | Зов Молнии | P: [каталог](https://pf2.ru/toponyms/lightning%27s%20call);  Shining Kingdoms |
| Lingshen | Линшэнь | P: [каталог](https://pf2.ru/toponyms/lingshen); Тянь-Ша. Путеводитель по миру |
| Linvarre | Линвар | P: [каталог](https://pf2.ru/toponyms/linvarre); Тянь-Ша. Путеводитель по миру |
| Lionsguard | Львиная Стража | P: [каталог](https://pf2.ru/toponyms/lionsguard); Путеводитель по региону Внутреннего Моря |
| Litran | Литран | K: [маркер 282791](https://app.kanka.io/w/227989/entities/5472656/map/markers/282791) |
| Little Sellen River | Река Малый Селлен | P: [каталог](https://pf2.ru/toponyms/little%20sellen%20river); Серия приключений Kingmaker |
| Little Tusk | Малый Бивень | P: [каталог](https://pf2.ru/toponyms/little%20tusk); Путеводитель по региону Внутреннего Моря |
| Little Vanji River | Река Малая Ванджи | P: [каталог](https://pf2.ru/toponyms/little%20vanji%20river);  The Mwangi Expanse |
| Littletown | Невеличка | P: [каталог](https://pf2.ru/toponyms/littletown); Серия приключений Kingmaker |
| Lockridge | Локридж | P: [каталог](https://pf2.ru/toponyms/lockridge); Путеводитель по региону Внутреннего Моря |
| Logas | Логас | K: [маркер 281698](https://app.kanka.io/w/227989/entities/5472656/map/markers/281698) |
| Longacre | Лонгакр | P: [каталог](https://pf2.ru/toponyms/longacre); Путеводитель по региону Внутреннего Моря |
| Loric Fells | Лориковы пустоши | P: [каталог](https://pf2.ru/toponyms/loric%20fells); Путеводитель по миру |
| Lost Coast | Забытое побережье | P: [каталог](https://pf2.ru/toponyms/lost%20coast); Путеводитель по региону Внутреннего Моря |
| Lost Mines | Исчезнувшие копи | P: [каталог](https://pf2.ru/toponyms/lost%20mines); Путеводитель по региону Внутреннего Моря |
| Lost Yemal | Погибший Йемал | P: [каталог](https://pf2.ru/toponyms/lost%20yemal); Путеводитель по региону Внутреннего Моря |
| Losthome | Потерянный Дом | P: [каталог](https://pf2.ru/toponyms/losthome); Путеводитель по региону Внутреннего Моря |
| Lozeri | Лозери | P: [каталог](https://pf2.ru/toponyms/lozeri); Путеводитель по региону Внутреннего Моря |
| Lurkwood | Ларквуд | P: [каталог](https://pf2.ru/toponyms/lurkwood); Путеводитель по региону Внутреннего Моря |
| Lyrune-Quah | Лайрун-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:593](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L593) |
| M'neri Plains | Равнина М'Нери | P: [каталог](https://pf2.ru/toponyms/m%27neri%20plains);  The Mwangi Expanse |
| M'neri Valley Cattle Ranch | Животноводческое ранчо долины М'Нери | P: [каталог](https://pf2.ru/toponyms/m%27neri%20valley%20cattle%20ranch);  The Mwangi Expanse |
| Maashinelle | Маашинель | P: [каталог](https://pf2.ru/toponyms/maashinelle); Путеводитель по региону Внутреннего Моря |
| Macini | Мачини | P: [каталог](https://pf2.ru/toponyms/macini); Путеводитель по региону Внутреннего Моря |
| Macridi | Макриди | K: [маркер 282763](https://app.kanka.io/w/227989/entities/5472656/map/markers/282763) |
| Magnimar | Магнимар | T |
| Maharev River | Река Махарев | P: [каталог](https://pf2.ru/toponyms/maharev%20river); Путеводитель по региону Внутреннего Моря |
| Maheto | Махето | K: [маркер 282781](https://app.kanka.io/w/227989/entities/5472656/map/markers/282781) |
| Maiestas River | Река Маэстас | P: [каталог](https://pf2.ru/toponyms/maiestas%20river); Путеводитель по региону Внутреннего Моря |
| Malebolge | Мэлболдж | T |
| Malgorian Mountains | Малгорийские горы | P: [каталог](https://pf2.ru/toponyms/malgorian%20mountains); Путеводитель по региону Внутреннего Моря |
| Mana Wastes | Пустоши Маны | T |
| Manaket | Манакет | P: [каталог](https://pf2.ru/toponyms/manaket); Путеводитель по миру |
| Marbleflow River | Мраморная река | P: [каталог](https://pf2.ru/toponyms/marbleflow%20river); Путеводитель по региону Внутреннего Моря |
| Marching Springs | Ходячие Родники | P: [каталог](https://pf2.ru/toponyms/marching%20springs); Путеводитель по региону Внутреннего Моря |
| Marideth River | Река Маридет | P: [каталог](https://pf2.ru/toponyms/marideth%20river); Путеводитель по региону Внутреннего Моря |
| Martel | Мартел | P: [каталог](https://pf2.ru/toponyms/martel);  Impossible Lands |
| Mechitar | Мехитар | T |
| Mediogalti Island | Остров Медиогальти | T |
| Melcat | Мелкат | P: [каталог](https://pf2.ru/toponyms/melcat); Путеводитель по миру |
| Melfesh | Мельфеш | P: [каталог](https://pf2.ru/toponyms/melfesh); Путеводитель по региону Внутреннего Моря |
| Menador Mountains | Горы Менадор | K: [маркер 277951](https://app.kanka.io/w/227989/entities/5472656/map/markers/277951) |
| Mendev | Мендев | K: [маркер 263409](https://app.kanka.io/w/227989/entities/5472656/map/markers/263409) |
| Merab | Мераб | K: [маркер 330189](https://app.kanka.io/w/227989/entities/5472656/map/markers/330189) |
| Meravon | Меравон | K: [маркер 280056](https://app.kanka.io/w/227989/entities/5472656/map/markers/280056) |
| Meraz Desert | Пустыня Мераз | P: [каталог](https://pf2.ru/toponyms/meraz%20desert); Путеводитель по региону Внутреннего Моря |
| Meraz River | Река Мераз | P: [каталог](https://pf2.ru/toponyms/meraz%20river); Путеводитель по региону Внутреннего Моря |
| Merciful Bay | Залив Избавления | P: [каталог](https://pf2.ru/toponyms/merciful%20bay); Путеводитель по региону Внутреннего Моря |
| Merry Widow | «Весёлая вдова» | P: [каталог](https://pf2.ru/toponyms/merry%20widow); Путеводитель по региону Внутреннего Моря |
| Miasmere | Миасмер | T |
| Mierani Forest | Лес Миерани | P: [каталог](https://pf2.ru/toponyms/mierani%20forest); Путеводитель по региону Внутреннего Моря |
| Mildanesi Mountains | Милданезийские горы | P: [каталог](https://pf2.ru/toponyms/mildanesi%20mountains); Пушки и шестерни |
| Mimere | Маймер | P: [каталог](https://pf2.ru/toponyms/mimere); Путеводитель по региону Внутреннего Моря |
| Minaret | Минарет | P: [каталог](https://pf2.ru/toponyms/minaret);  Shining Kingdoms |
| Minata | Мината | P: [каталог](https://pf2.ru/toponyms/minata); Тянь-Ша. Путеводитель по миру |
| Mindspin Mountains | Головокружительные Горы | T |
| Mines of Deeptreasure | Копи «Сокровищ Глубин» | P: [каталог](https://pf2.ru/toponyms/mines%20of%20deeptreasure);  The Mwangi Expanse |
| Minkai | Минкай | T |
| Misarias | Мизариас | P: [каталог](https://pf2.ru/toponyms/misarias); Путеводитель по региону Внутреннего Моря |
| Missa Shelf | Равнина Мисса | P: [каталог](https://pf2.ru/toponyms/missa%20shelf);  Shining Kingdoms |
| Mistshroud Cliff | Берег Туманной Пелены | P: [каталог](https://pf2.ru/toponyms/mistshroud%20cliff); Путеводитель по региону Внутреннего Моря |
| Mivon | Мивон | P: [каталог](https://pf2.ru/toponyms/mivon); Путеводитель по региону Внутреннего Моря |
| Mobhad Leigh | Мобад Ли | P: [каталог](https://pf2.ru/toponyms/mobhad%20leigh); Путеводитель по региону Внутреннего Моря |
| Molthune | Молтун | T |
| Monastery of the Veil | Монастырь Завесы | P: [каталог](https://pf2.ru/toponyms/monastery%20of%20the%20veil); Путеводитель по региону Внутреннего Моря |
| Moonpool Causeways | Дорога Лунных озёр | P: [каталог](https://pf2.ru/toponyms/moonpool%20causeways);  Shining Kingdoms |
| Mordant Spire | Острый шпиль | K: [маркер 249840](https://app.kanka.io/w/227989/entities/5472656/map/markers/249840) |
| Mormouth | Мормаут | P: [каталог](https://pf2.ru/toponyms/mormouth); Путеводитель по региону Внутреннего Моря |
| Mosquito Island | Комариный остров | P: [каталог](https://pf2.ru/toponyms/mosquito%20island); Путеводитель по региону Внутреннего Моря |
| Mosswater | Моховодье | P: [каталог](https://pf2.ru/toponyms/mosswater); Путеводитель по региону Внутреннего Моря |
| Motaku Isle | Остров Мотаку | P: [каталог](https://pf2.ru/toponyms/motaku%20isle); Путеводитель по региону Внутреннего Моря |
| Moutray River | Река Мутрей | P: [каталог](https://pf2.ru/toponyms/moutray%20river); Путеводитель по миру |
| Mukinami | Мукинами | P: [каталог](https://pf2.ru/toponyms/mukinami); Тянь-Ша. Путеводитель по миру |
| Mundatei | Мундатей | P: [каталог](https://pf2.ru/toponyms/mundatei); Путеводитель по региону Внутреннего Моря |
| Murque River | Мара | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `de381f84-301e-453b-af01-e112625763e7` |
| Mushfens | Гриболота | P: [каталог](https://pf2.ru/toponyms/mushfens); P; смысловая замена неудачного прежнего варианта |
| Mut | Мут | P: [каталог](https://pf2.ru/toponyms/mut); Путеводитель по региону Внутреннего Моря |
| Mwangi Expanse | Просторы Муанги | T |
| Mwangi Jungle | Джунгли Муанги | P: [каталог](https://pf2.ru/toponyms/mwangi%20jungle); P + E: согласовано с сохранённым Mwangi Expanse — Просторы Муанги |
| Mzali | Мзали | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:641](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L641) |
| Nagajor | Нагаджор | P: [каталог](https://pf2.ru/toponyms/nagajor); Тянь-Ша. Путеводитель по миру |
| Nagisa | Нагиса | P: [каталог](https://pf2.ru/toponyms/nagisa);  The Mwangi Expanse |
| Nantambu | Нантамбу | R: [source/ancestries_and_backgrounds/versatile_heritages/aphorite.rst:103](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/versatile_heritages/aphorite.rst#L103) |
| Napsune Mountains | Горы Напсун | P: [каталог](https://pf2.ru/toponyms/napsune%20mountains); Путеводитель по региону Внутреннего Моря |
| Narlmarches | Скрюченные топи | P: [каталог](https://pf2.ru/toponyms/narlmarches); Серия приключений Kingmaker |
| Ndele Gap | Перевал Нделе | P: [каталог](https://pf2.ru/toponyms/ndele%20gap);  The Mwangi Expanse |
| Nerosyan | Неросиан | K: [маркер 263408](https://app.kanka.io/w/227989/entities/5472656/map/markers/263408) |
| Neruma | Нерума | P: [каталог](https://pf2.ru/toponyms/neruma); Путеводитель по региону Внутреннего Моря |
| New Krane | Новый Крейн | P: [каталог](https://pf2.ru/toponyms/new%20krane); Путеводитель по региону Внутреннего Моря |
| New Oppara | Новая Оппара | P: [каталог](https://pf2.ru/toponyms/new%20oppara); P + E: согласовано с Oppara — Оппара |
| New Stetven | Новый Стетвен | K: [маркер 273437](https://app.kanka.io/w/227989/entities/5472656/map/markers/273437) |
| New Thassilon | Новый Тассилон | K: [маркер 250066](https://app.kanka.io/w/227989/entities/5472656/map/markers/250066) |
| Nex | Некс | T |
| Ngōn Hoa | Нгон Хоа | P: [каталог](https://pf2.ru/toponyms/ng%C5%8Dn%20hoa); Тянь-Ша. Путеводитель по миру |
| Nidal | Нидал | T |
| Nirmathas | Нирмафас | T |
| Nisroch | Нисрок | T |
| Nisroch Bay | Залив Нисрох | P: [каталог](https://pf2.ru/toponyms/nisroch%20bay); Путеводитель по региону Внутреннего Моря |
| Niswan | Нисван | P: [каталог](https://pf2.ru/toponyms/niswan);  Impossible Lands |
| Nivakta's Crossing | Переправа Нивакты | P: [каталог](https://pf2.ru/toponyms/nivakta%E2%80%99s%20crossing); P + E: родительный падеж имени Нивакта |
| Nogortha Necropolis | Некрополь Ногорты | P: [каталог](https://pf2.ru/toponyms/nogortha%20necropolis);  Shining Kingdoms |
| Nogortha Peaks | Пики Ногорты | P: [каталог](https://pf2.ru/toponyms/nogortha%20peaks);  Shining Kingdoms |
| Nolands | Ничейные земли | P: [каталог](https://pf2.ru/toponyms/nolands); Путеводитель по региону Внутреннего Моря |
| Nordein Glacier | Ледник Нордейн | P: [каталог](https://pf2.ru/toponyms/nordein%20glacier);  Shining Kingdoms |
| North Plains | Северные равнины | P: [каталог](https://pf2.ru/toponyms/north%20plains); P + E: исправлена опечатка Севреные |
| Northern Fangwood | Северное Клыколесье | P: [каталог](https://pf2.ru/toponyms/northern%20fangwood);  Knights of Lastwall |
| Northern Hymbrian Forest | Северный Химбрийский лес | P: [каталог](https://pf2.ru/toponyms/northern%20hymbrian%20forest); Путеводитель по региону Внутреннего Моря |
| Northern Tapur Forest | Лес Северный Тапур | P: [каталог](https://pf2.ru/toponyms/northern%20tapur%20forest); Путеводитель по региону Внутреннего Моря |
| Nosam River | Река Носам | P: [каталог](https://pf2.ru/toponyms/nosam%20river); Путеводитель по региону Внутреннего Моря |
| Novoboro | Новоборо | P: [каталог](https://pf2.ru/toponyms/novoboro); Путеводитель по региону Внутреннего Моря |
| Nuat | Нуат | P: [каталог](https://pf2.ru/toponyms/nuat); Путеводитель по миру |
| Numeria | Нумерия | K: [маркер 273435](https://app.kanka.io/w/227989/entities/5472656/map/markers/273435) |
| Numijaan | Нумидзан | P: [каталог](https://pf2.ru/toponyms/numijaan); Тянь-Ша. Путеводитель по миру |
| Nybor | Найбор | P: [каталог](https://pf2.ru/toponyms/nybor); Путеводитель по региону Внутреннего Моря |
| Nystra | Нистра | P: [каталог](https://pf2.ru/toponyms/nystra); Путеводитель по региону Внутреннего Моря |
| Oagon | Оагон | P: [каталог](https://pf2.ru/toponyms/oagon);  The Mwangi Expanse |
| Obari Ocean | Обарийский океан | K: [маркер 252240](https://app.kanka.io/w/227989/entities/5472656/map/markers/252240) |
| Odranto | Одранто | P: [каталог](https://pf2.ru/toponyms/odranto); Путеводитель по региону Внутреннего Моря |
| Oenopion | Энопион | T |
| Okaiyo Ocean | Окайский океан | P: [каталог](https://pf2.ru/toponyms/okaiyo%20ocean); Путеводитель по миру |
| Okeno | Окено | P: [каталог](https://pf2.ru/toponyms/okeno); Путеводитель по миру |
| Old Cheliax | Старая Челия | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:649](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L649) |
| Old Sehir | Старый Сехир | P: [каталог](https://pf2.ru/toponyms/old%20sehir); Путеводитель по региону Внутреннего Моря |
| Oleg's Trading Post | Торговый пост Олега | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `dea66e76-47c7-48a4-a92a-13b07060aff0` |
| Olfden | Ольфден | P: [каталог](https://pf2.ru/toponyms/olfden);  Shining Kingdoms |
| Ollo | Олло | P: [каталог](https://pf2.ru/toponyms/ollo); Путеводитель по региону Внутреннего Моря |
| Omash | Омаш | P: [каталог](https://pf2.ru/toponyms/omash); Путеводитель по региону Внутреннего Моря |
| Omesta | Оместа | K: [маркер 338914](https://app.kanka.io/w/227989/entities/5472656/map/markers/338914) |
| Oppara | Оппара | K: [маркер 282779](https://app.kanka.io/w/227989/entities/5472656/map/markers/282779) |
| Oprak | Опрак | K: [маркер 277957](https://app.kanka.io/w/227989/entities/5472656/map/markers/277957) |
| Ordu-Aganhei | Орду-Аганей | P: [каталог](https://pf2.ru/toponyms/ordu-aganhei); Тянь-Ша. Путеводитель по миру |
| Oregent | Орегент | K: [маркер 282772](https://app.kanka.io/w/227989/entities/5472656/map/markers/282772) |
| Orlov | Орлов | P: [каталог](https://pf2.ru/toponyms/orlov); Путеводитель по региону Внутреннего Моря |
| Orolo's Quay | Причал Ороло | P: [каталог](https://pf2.ru/toponyms/orolo%27s%20quay); Путеводитель по региону Внутреннего Моря |
| Ortalaca | Орталака | P: [каталог](https://pf2.ru/toponyms/ortalaca); Путеводитель по региону Внутреннего Моря |
| Orthost | Ортост | P: [каталог](https://pf2.ru/toponyms/orthost); Путеводитель по региону Внутреннего Моря |
| Osibu | Осибу | P: [каталог](https://pf2.ru/toponyms/osibu);  The Mwangi Expanse, Война бессмертных |
| Osirion | Осирион | K: [маркер 330224](https://app.kanka.io/w/227989/entities/5472656/map/markers/330224) |
| Ostenso | Остенсо | K: [маркер 281695](https://app.kanka.io/w/227989/entities/5472656/map/markers/281695) |
| Otari | Отари | G |
| Oubinga River | Река Убинга | P: [каталог](https://pf2.ru/toponyms/oubinga%20river); Путеводитель по региону Внутреннего Моря |
| Ounga River | Река Унга | P: [каталог](https://pf2.ru/toponyms/ounga%20river); Путеводитель по региону Внутреннего Моря |
| Outsea | Наморье | T |
| Padiskar | Падискар | P: [каталог](https://pf2.ru/toponyms/padiskar);  Impossible Lands |
| Painted Flutes | Крашеные Флейты | P: [каталог](https://pf2.ru/toponyms/painted%20flutes); Путеводитель по региону Внутреннего Моря |
| Palace Mortales | Палас-Морталес | P: [каталог](https://pf2.ru/toponyms/palace%20mortales); Путеводитель по региону Внутреннего Моря |
| Palace of Virtue | Дворец Добродетели | P: [каталог](https://pf2.ru/toponyms/palace%20of%20virtue); Путеводитель по региону Внутреннего Моря |
| Palakar Forest | Палакарский лес | K: [маркер 282762](https://app.kanka.io/w/227989/entities/5472656/map/markers/282762) |
| Pale Mountain | Бледная гора | P: [каталог](https://pf2.ru/toponyms/pale%20mountain); Война бессмертных |
| Pale River | Бледная река | P: [каталог](https://pf2.ru/toponyms/pale%20river); Путеводитель по региону Внутреннего Моря |
| Palin's Cove | Бухта Палин | P: [каталог](https://pf2.ru/toponyms/palin%27s%20cove); Путеводитель по региону Внутреннего Моря |
| Pangolais | Панголаис | T |
| Parched Dunes | Выжженные дюны | P: [каталог](https://pf2.ru/toponyms/parched%20dunes); Путеводитель по региону Внутреннего Моря |
| Pashman River | Река Пашман | P: [каталог](https://pf2.ru/toponyms/pashman%20river); Путеводитель по региону Внутреннего Моря |
| Pashow | Пэшоу | P: [каталог](https://pf2.ru/toponyms/pashow); Путеводитель по миру |
| Path River | Путеводная река | P: [каталог](https://pf2.ru/toponyms/path%20river); Путеводитель по региону Внутреннего Моря |
| Path of Salt | Соляной путь | T |
| Peddlegate | Торговые Врата | P: [каталог](https://pf2.ru/toponyms/peddlegate);  Shining Kingdoms |
| Peijia | Пэйцзя | P: [каталог](https://pf2.ru/toponyms/peijia); Тянь-Ша. Путеводитель по миру |
| Peridot Isle | Хризолитовый остров | P: [каталог](https://pf2.ru/toponyms/peridot%20isle); Путеводитель по региону Внутреннего Моря |
| Pezzack | Пеззак | K: [маркер 281688](https://app.kanka.io/w/227989/entities/5472656/map/markers/281688) |
| Phahalen Island | Остров Фахален | P: [каталог](https://pf2.ru/toponyms/phahalen%20island); Путеводитель по региону Внутреннего Моря |
| Pier's End | Конец пирса | K: [маркер 280058](https://app.kanka.io/w/227989/entities/5472656/map/markers/280058) |
| Pilgrimage | Паломничество | K: [маркер 260101](https://app.kanka.io/w/227989/entities/5472656/map/markers/260101) |
| Pillar of Palamia | Паламский Столп | P: [каталог](https://pf2.ru/toponyms/pillar%20of%20palamia); Путеводитель по региону Внутреннего Моря |
| Pillars of Anferita | Столпы Анфериты | P: [каталог](https://pf2.ru/toponyms/pillars%20of%20anferita); Путеводитель по региону Внутреннего Моря |
| Pillars of the Sun | Столпы Солнца | P: [каталог](https://pf2.ru/toponyms/pillars%20of%20the%20sun); Путеводитель по региону Внутреннего Моря |
| Piren's Bluff | Пиренов Утёс | P: [каталог](https://pf2.ru/toponyms/piren%27s%20bluff);  Shining Kingdoms |
| Pitax | Питакс | R: [source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst:425](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst#L425) |
| Pitax River | Река Питакс | P: [каталог](https://pf2.ru/toponyms/pitax%20river); Путеводитель по региону Внутреннего Моря |
| Plains of Molthune | Равнины Молтуна | P: [каталог](https://pf2.ru/toponyms/plains%20of%20molthune); Путеводитель по региону Внутреннего Моря |
| Plains of Paresh | Равнины Пареш | P: [каталог](https://pf2.ru/toponyms/plains%20of%20paresh); Путеводитель по региону Внутреннего Моря |
| Po Li | По Ли | P: [каталог](https://pf2.ru/toponyms/po%20li); Тянь-Ша. Путеводитель по миру |
| Port Freedom | Порт-Свобода | P: [каталог](https://pf2.ru/toponyms/port%20freedom);  The Mwangi Expanse |
| Port Ice | Порт Лед | K: [маркер 260093](https://app.kanka.io/w/227989/entities/5472656/map/markers/260093) |
| Port Peril | Порт-Перил | G |
| Port Valen | Порт Вален | P: [каталог](https://pf2.ru/toponyms/port%20valen); Пушки и шестерни |
| Porthmos Gap | Пролом Портмоса | P: [каталог](https://pf2.ru/toponyms/porthmos%20gap);  Shining Kingdoms |
| Prada Hanam | Прада-Ханам | P: [каталог](https://pf2.ru/toponyms/prada%20hanam);  Impossible Lands |
| Profit's Flow | Богатый Проток | P: [каталог](https://pf2.ru/toponyms/profit%27s%20flow);  Shining Kingdoms |
| Promise | Обещание | K: [маркер 249831](https://app.kanka.io/w/227989/entities/5472656/map/markers/249831) |
| Prophet's Home | Дом Пророка | P: [каталог](https://pf2.ru/toponyms/prophet%27s%20home);  Shining Kingdoms |
| Protectorate of the Black Marquis | Протекторат Чёрного Маркиза | P: [каталог](https://pf2.ru/toponyms/protectorate%20of%20the%20black%20marquis); Путеводитель по региону Внутреннего Моря |
| Pure Temple of the Maharajah | Чистый храм махараджи | P: [каталог](https://pf2.ru/toponyms/pure%20temple%20of%20the%20maharajah);  Impossible Lands |
| Pyramid of Doom | Пирамида Рока | P: [каталог](https://pf2.ru/toponyms/pyramid%20of%20doom); Путеводитель по региону Внутреннего Моря |
| Pyre Crest | Пайркрест | P: [каталог](https://pf2.ru/toponyms/pyre%20crest); Путеводитель по региону Внутреннего Моря |
| Qadira | Кадира | K: [маркер 312095](https://app.kanka.io/w/227989/entities/5472656/map/markers/312095) |
| Quain | Куэйн | T |
| Quantium | Квантиум | P: [каталог](https://pf2.ru/toponyms/quantium);  Impossible Lands |
| Quent | Квент | P: [каталог](https://pf2.ru/toponyms/quent); Путеводитель по миру |
| Rahadoum | Рахадум | G |
| Raiteso River | Река Райтезо | P: [каталог](https://pf2.ru/toponyms/raiteso%20river); Путеводитель по региону Внутреннего Моря |
| Rakarit | Ракарит | P: [каталог](https://pf2.ru/toponyms/rakarit); Тянь-Ша. Путеводитель по миру |
| Ranage's Circle | Круг Ранаж | P: [каталог](https://pf2.ru/toponyms/ranage%27s%20circle);  The Mwangi Expanse |
| Raptor Island | Завровый остров | P: [каталог](https://pf2.ru/toponyms/raptor%20island); Путеводитель по региону Внутреннего Моря |
| Raven's River | Воронова река | P: [каталог](https://pf2.ru/toponyms/raven%27s%20river); Путеводитель по региону Внутреннего Моря |
| Ravengro | Рейвенгро | P: [каталог](https://pf2.ru/toponyms/ravengro); Путеводитель по региону Внутреннего Моря |
| Ravenmoor | Воронья Топь | P: [каталог](https://pf2.ru/toponyms/ravenmoor); Путеводитель по региону Внутреннего Моря |
| Ravenroost River | Река Вороньи Гнездовища | P: [каталог](https://pf2.ru/toponyms/ravenroost%20river); Путеводитель по региону Внутреннего Моря |
| Ravounel | Равунел | T |
| Ravounel Forest | Лес Равунель | P: [каталог](https://pf2.ru/toponyms/ravounel%20forest); Путеводитель по региону Внутреннего Моря |
| Razmiran | Размиран | K: [маркер 273708](https://app.kanka.io/w/227989/entities/5472656/map/markers/273708) |
| Realm of the Mammoth Lords | Земли Владык Мамонтов | P: [каталог](https://pf2.ru/toponyms/realm%20of%20the%20mammoth%20lords); P; Lords означает владык, а не погонщиков |
| Rechiend's Plains | Равнина Речьенда | P: [каталог](https://pf2.ru/toponyms/rechiend%27s%20plains); Путеводитель по региону Внутреннего Моря |
| Red Fox River | Лисья река | P: [каталог](https://pf2.ru/toponyms/red%20fox%20river); Путеводитель по региону Внутреннего Моря |
| Red Kiravoy | Алый Киравой | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `e5ed630b-8a72-44c5-afd4-a2d984ea2814` |
| Red Mountains | Красные горы | P: [каталог](https://pf2.ru/toponyms/red%20mountains); Путеводитель по региону Внутреннего Моря |
| Red Reed River | Краснотравная река | P: [каталог](https://pf2.ru/toponyms/red%20reed%20river); Путеводитель по региону Внутреннего Моря |
| Red Rune Canyon | Каньон Красной Руны | P: [каталог](https://pf2.ru/toponyms/red%20rune%20canyon); Путеводитель по региону Внутреннего Моря |
| Redleaf | Краснолист | P: [каталог](https://pf2.ru/toponyms/redleaf); Путеводитель по региону Внутреннего Моря |
| Redtooth | Краснозуб | P: [каталог](https://pf2.ru/toponyms/redtooth); Путеводитель по региону Внутреннего Моря |
| Remesiana | Ремезиана | P: [каталог](https://pf2.ru/toponyms/remesiana); Путеводитель по региону Внутреннего Моря |
| Renchurch | Ренчёрч | P: [каталог](https://pf2.ru/toponyms/renchurch);  Knights of Lastwall |
| Restov | Рестов | K: [маркер 260095](https://app.kanka.io/w/227989/entities/5472656/map/markers/260095) |
| Riddleport | Ридлпорт | K: [маркер 249893](https://app.kanka.io/w/227989/entities/5472656/map/markers/249893) |
| Ridonport | Ридонпорт | P: [каталог](https://pf2.ru/toponyms/ridonport);  Shining Kingdoms |
| Ridwan | Ридван | K: [маркер 281686](https://app.kanka.io/w/227989/entities/5472656/map/markers/281686) |
| Rift of Niltak | Разлом Нилтака | P: [каталог](https://pf2.ru/toponyms/rift%20of%20niltak); Путеводитель по региону Внутреннего Моря |
| Rimeflow River | Студёная река | P: [каталог](https://pf2.ru/toponyms/rimeflow%20river); Путеводитель по региону Внутреннего Моря |
| Rimeskull | Морозный Череп | P: [каталог](https://pf2.ru/toponyms/rimeskull); Путеводитель по региону Внутреннего Моря |
| Rivenrake Island | Остров Ривенрейк | P: [каталог](https://pf2.ru/toponyms/rivenrake%20island); Путеводитель по региону Внутреннего Моря |
| River Bdonge | Река Бдонге | P: [каталог](https://pf2.ru/toponyms/river%20bdonge);  The Mwangi Expanse |
| River Esk | Река Эск | P: [каталог](https://pf2.ru/toponyms/river%20esk); Путеводитель по региону Внутреннего Моря |
| River Foam | Пенистая река | P: [каталог](https://pf2.ru/toponyms/river%20foam);  Shining Kingdoms |
| River Iseld | Река Изельд | P: [каталог](https://pf2.ru/toponyms/river%20iseld); Путеводитель по региону Внутреннего Моря |
| River Kingdoms | Речные Королевства | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:577](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L577) |
| River Ladan | Река Ладан | P: [каталог](https://pf2.ru/toponyms/river%20ladan); Путеводитель по региону Внутреннего Моря |
| River Porthmos | Река Портмоса | P: [каталог](https://pf2.ru/toponyms/river%20porthmos);  Shining Kingdoms |
| River Sald | Река Салд | P: [каталог](https://pf2.ru/toponyms/river%20sald);  Impossible Lands |
| River Scorpius | Река Скорпиона | P: [каталог](https://pf2.ru/toponyms/river%20scorpius); Путеводитель по региону Внутреннего Моря |
| River Sphinx | Река Сфинкс | P: [каталог](https://pf2.ru/toponyms/river%20sphinx); Путеводитель по миру, Рёв дикой природы |
| River of Lost Tears | Река Забытых Слёз | P: [каталог](https://pf2.ru/toponyms/river%20of%20lost%20tears);  The Mwangi Expanse |
| Riverford | Риверфорд | P: [каталог](https://pf2.ru/toponyms/riverford);  Shining Kingdoms |
| Riverspire | Речной шпиль | K: [маркер 338915](https://app.kanka.io/w/227989/entities/5472656/map/markers/338915) |
| Riverton | Ривертон | P: [каталог](https://pf2.ru/toponyms/riverton); Путеводитель по региону Внутреннего Моря |
| Roderic's Cove | Бухта Родерика | P: [каталог](https://pf2.ru/toponyms/roderic%27s%20cove); Путеводитель по региону Внутреннего Моря |
| Rolgrimmdur | Ролгриммдур | K: [маркер 282765](https://app.kanka.io/w/227989/entities/5472656/map/markers/282765) |
| Rookwarden | Рукварден | P: [каталог](https://pf2.ru/toponyms/rookwarden); Путеводитель по региону Внутреннего Моря |
| Roslar's Coffer | Росларова Казна | P: [каталог](https://pf2.ru/toponyms/roslar%27s%20coffer);  Knights of Lastwall |
| Rovagug's Hall | Зал Ровагуга | K: [маркер 280062](https://app.kanka.io/w/227989/entities/5472656/map/markers/280062) |
| Rushlight | Лучезарное озеро | P: [каталог](https://pf2.ru/toponyms/rushlight); Серия приключений Kingmaker |
| Rushlight River | Лучезарка | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `fdf0f3cc-c8d4-4152-b359-3b83a58969a8` |
| Saad | Саад | P: [каталог](https://pf2.ru/toponyms/saad); Путеводитель по региону Внутреннего Моря |
| Sable Barrow | Чёрная гора | P: [каталог](https://pf2.ru/toponyms/sable%20barrow); Путеводитель по региону Внутреннего Моря |
| Saffron House | Шафранный Дом | P: [каталог](https://pf2.ru/toponyms/saffron%20house); Путеводитель по региону Внутреннего Моря |
| Saga Lands | Земли Сказаний | T |
| Sahure Wastes | Пустыня Сахура | P: [каталог](https://pf2.ru/toponyms/sahure%20wastes); Путеводитель по региону Внутреннего Моря |
| Salt Hills | Солёные холмы | P: [каталог](https://pf2.ru/toponyms/salt%20hills); Путеводитель по региону Внутреннего Моря |
| Salt Stretch | Соляной Пояс | P: [каталог](https://pf2.ru/toponyms/salt%20stretch); Пушки и шестерни |
| Sanctum of Sand | Песчаное святилище | P: [каталог](https://pf2.ru/toponyms/sanctum%20of%20sand); Путеводитель по региону Внутреннего Моря |
| Sand Haven | Песчаная Гавань | P: [каталог](https://pf2.ru/toponyms/sand%20haven); Путеводитель по региону Внутреннего Моря |
| Sandpoint | Сэндпоинт | K: [маркер 259835](https://app.kanka.io/w/227989/entities/5472656/map/markers/259835) |
| Sangpo-Jong | Санпо-Чжон | P: [каталог](https://pf2.ru/toponyms/sangpo-jong); Тянь-Ша. Путеводитель по миру |
| Sanos Forest | Лес Санос | P: [каталог](https://pf2.ru/toponyms/sanos%20forest); Путеводитель по региону Внутреннего Моря |
| Sarain | Сарен | P: [каталог](https://pf2.ru/toponyms/sarain); Путеводитель по региону Внутреннего Моря |
| Saray Coast | Сареев берег | P: [каталог](https://pf2.ru/toponyms/saray%20coast); Путеводитель по региону Внутреннего Моря |
| Sardis Township | Сардис | P: [каталог](https://pf2.ru/toponyms/sardis%20township); P + E: удалена отсутствующая в Sardis согласная т |
| Sargava | Саргава | P: [каталог](https://pf2.ru/toponyms/sargava);  The Mwangi Expanse |
| Saringallow | Саринские Виселицы | P: [каталог](https://pf2.ru/toponyms/saringallow); Путеводитель по региону Внутреннего Моря |
| Sarkora River | Река Саркора | P: [каталог](https://pf2.ru/toponyms/sarkora%20river); Путеводитель по миру |
| Sarkoris | Саркорис | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:579](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L579) |
| Sarkoris Scar | Шрам Саркориса | K: [маркер 260104](https://app.kanka.io/w/227989/entities/5472656/map/markers/260104) |
| Sarusan | Сарусан | C |
| Sauerton | Сауэртон | P: [каталог](https://pf2.ru/toponyms/sauerton);  Shining Kingdoms |
| Saventh-Yhi | Савент-Йи | P: [каталог](https://pf2.ru/toponyms/saventh-yhi);  The Mwangi Expanse |
| Scar of the Spider | Паучий Шрам | P: [каталог](https://pf2.ru/toponyms/scar%20of%20the%20spider); Путеводитель по региону Внутреннего Моря |
| Scarab River | Река Скарабей | P: [каталог](https://pf2.ru/toponyms/scarab%20river); Путеводитель по региону Внутреннего Моря |
| Scarwall | Скарволл | R: [source/ancestries_and_backgrounds/ancestries/orc.rst:211](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/orc.rst#L211) |
| Schloss Caromarc | Замок Каромарк | P: [каталог](https://pf2.ru/toponyms/schloss%20caromarc); Путеводитель по региону Внутреннего Моря |
| Scorpion Coast | Скорпионий берег | P: [каталог](https://pf2.ru/toponyms/scorpion%20coast); Путеводитель по региону Внутреннего Моря |
| Scrapwall | Стена Хлама | P: [каталог](https://pf2.ru/toponyms/scrapwall); Путеводитель по региону Внутреннего Моря |
| Scrawny Crossing | Худая Переправа | P: [каталог](https://pf2.ru/toponyms/scrawny%20crossing); Путеводитель по региону Внутреннего Моря |
| Screaming Jungle | Кричащие Джунгли | T |
| Sedeq | Седэк | K: [маркер 312099](https://app.kanka.io/w/227989/entities/5472656/map/markers/312099) |
| Segada | Сегада | P: [каталог](https://pf2.ru/toponyms/segada); Пушки и шестерни |
| Segang Jungle | Джунгли Сеганг | P: [каталог](https://pf2.ru/toponyms/segang%20jungle);  Impossible Lands |
| Selkelas | Селкелас | P: [каталог](https://pf2.ru/toponyms/selkelas); Путеводитель по региону Внутреннего Моря |
| Sellen River | Река Селлен | P: [каталог](https://pf2.ru/toponyms/sellen%20river); Путеводитель по миру |
| Senara | Сенара | K: [маркер 281694](https://app.kanka.io/w/227989/entities/5472656/map/markers/281694) |
| Senghor | Сенгор | T |
| Senir River | Река Сенир | P: [каталог](https://pf2.ru/toponyms/senir%20river); Путеводитель по региону Внутреннего Моря |
| Seraph's Ladder | Ступени Серафима | P: [каталог](https://pf2.ru/toponyms/seraph%27s%20ladder); Путеводитель по региону Внутреннего Моря |
| Seredain | Середен | P: [каталог](https://pf2.ru/toponyms/seredain); Путеводитель по региону Внутреннего Моря |
| Seven Stelae | Семь Стел | P: [каталог](https://pf2.ru/toponyms/seven%20stelae); Путеводитель по региону Внутреннего Моря |
| Seven Tears River | Река Семи Слёз | P: [каталог](https://pf2.ru/toponyms/seven%20tears%20river); Путеводитель по региону Внутреннего Моря |
| Sevenarches | Семиарки | K: [маркер 260102](https://app.kanka.io/w/227989/entities/5472656/map/markers/260102) |
| Sezgin | Сезгин | P: [каталог](https://pf2.ru/toponyms/sezgin); Путеводитель по региону Внутреннего Моря |
| Shadde-Quah | Шаддэ-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:589](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L589) |
| Shadefields | Шейдфилдс | P: [каталог](https://pf2.ru/toponyms/shadefields); Путеводитель по региону Внутреннего Моря |
| Shadow Caverns | Пещеры Теней | P: [каталог](https://pf2.ru/toponyms/shadow%20caverns); Путеводитель по региону Внутреннего Моря |
| Shadun | Шадун | P: [каталог](https://pf2.ru/toponyms/shadun); Путеводитель по миру |
| Shanguang | Шаньгуан | P: [каталог](https://pf2.ru/toponyms/shanguang); Тянь-Ша. Путеводитель по миру |
| Shardstone | Остров Черепков | P: [каталог](https://pf2.ru/toponyms/shardstone); Путеводитель по региону Внутреннего Моря |
| Shark Island | Акулий остров | P: [каталог](https://pf2.ru/toponyms/shark%20island); Путеводитель по региону Внутреннего Моря |
| Sharkfin Island | Остров Акульего Плавника | P: [каталог](https://pf2.ru/toponyms/sharkfin%20island); Путеводитель по региону Внутреннего Моря |
| Shattered Range | Расколотый Хребет | T |
| Shay Citadels | Цитадели Шей | P: [каталог](https://pf2.ru/toponyms/shay%20citadels); Путеводитель по региону Внутреннего Моря |
| Shenmen | Шенмэн | T |
| Shepherd's Rock | Пастушья Скала | P: [каталог](https://pf2.ru/toponyms/shepherd%27s%20rock); Путеводитель по миру |
| Shevaroth | Шэварос | K: [маркер 338917](https://app.kanka.io/w/227989/entities/5472656/map/markers/338917) |
| Shiman-Sekh | Шиман-Шекх | P: [каталог](https://pf2.ru/toponyms/shiman-sekh); Путеводитель по миру |
| Shining Kingdoms | Сияющие Королевства | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:672](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L672) |
| Shining Mountains | Сияющие горы | P: [каталог](https://pf2.ru/toponyms/shining%20mountains); Путеводитель по региону Внутреннего Моря |
| Shining River | Сияющая река | P: [каталог](https://pf2.ru/toponyms/shining%20river); Путеводитель по региону Внутреннего Моря |
| Shining Sea | Сияющее море | P: [каталог](https://pf2.ru/toponyms/shining%20sea); Тянь-Ша. Путеводитель по миру |
| Shouk | Шук | P: [каталог](https://pf2.ru/toponyms/shouk); Путеводитель по региону Внутреннего Моря |
| Shriikirri-Quah | Шриикирри-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:594](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L594) |
| Shrike River | Шумная река | P: [каталог](https://pf2.ru/toponyms/shrike%20river); Серия приключений Kingmaker |
| Shrikewood | Сорокопутов лес | P: [каталог](https://pf2.ru/toponyms/shrikewood); Путеводитель по региону Внутреннего Моря |
| Shroudwood | Скрытолесье | P: [каталог](https://pf2.ru/toponyms/shroudwood); Путеводитель по региону Внутреннего Моря |
| Shudderwood | Трепещущий лес | K: [маркер 260090](https://app.kanka.io/w/227989/entities/5472656/map/markers/260090) |
| Shundar-Quah | Шандар-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:591](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L591) |
| Siavenian | Сиавениан | P: [каталог](https://pf2.ru/toponyms/siavenian);  Shining Kingdoms |
| Sicnavier's Lair | Логово Сикнавира | P: [каталог](https://pf2.ru/toponyms/sicnavier%27s%20lair); Путеводитель по региону Внутреннего Моря |
| Silver Mount | Серебряная гора | T |
| Silver River | Река Серебрянка | P: [каталог](https://pf2.ru/toponyms/silver%20river); Путеводитель по региону Внутреннего Моря |
| Silverhall | Серебряный Чертог | P: [каталог](https://pf2.ru/toponyms/silverhall); Путеводитель по региону Внутреннего Моря |
| Silvertree | Сильвертри | P: [каталог](https://pf2.ru/toponyms/silvertree);  The Mwangi Expanse |
| Sinaria | Синария | P: [каталог](https://pf2.ru/toponyms/sinaria); Путеводитель по региону Внутреннего Моря |
| Sipplerose | Сиплроуз | P: [каталог](https://pf2.ru/toponyms/sipplerose); Путеводитель по региону Внутреннего Моря |
| Sirathu | Сирату | P: [каталог](https://pf2.ru/toponyms/sirathu); Путеводитель по региону Внутреннего Моря |
| Sirmium Plains | Сирмийская равнина | P: [каталог](https://pf2.ru/toponyms/sirmium%20plains); Путеводитель по региону Внутреннего Моря |
| Six Shells | Шесть Ракушек | P: [каталог](https://pf2.ru/toponyms/six%20shells); Путеводитель по региону Внутреннего Моря |
| Skelt | Скельт | P: [каталог](https://pf2.ru/toponyms/skelt); Путеводитель по региону Внутреннего Моря |
| Skittermounds | Курганьё | P: [каталог](https://pf2.ru/toponyms/skittermounds); Путеводитель по региону Внутреннего Моря |
| Sklar-Quah | Склар-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:592](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L592) |
| Skoan-Quah | Скон-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:595](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L595) |
| Skull Hill | Гора Черепа | P: [каталог](https://pf2.ru/toponyms/skull%20hill); Путеводитель по региону Внутреннего Моря |
| Skunk River | Река Смрадка | P: [каталог](https://pf2.ru/toponyms/skunk%20river); Серия приключений Kingmaker |
| Skywatch | Небесный дозор | K: [маркер 277916](https://app.kanka.io/w/227989/entities/5472656/map/markers/277916) |
| Slave Trenches of Hakotep | Рабские траншеи Хакотепа | P: [каталог](https://pf2.ru/toponyms/slave%20trenches%20of%20hakotep); Путеводитель по региону Внутреннего Моря |
| Sleeper | Спящий | P: [каталог](https://pf2.ru/toponyms/sleeper); Путеводитель по региону Внутреннего Моря |
| Slipcove | Слипкоув | P: [каталог](https://pf2.ru/toponyms/slipcove); Путеводитель по региону Внутреннего Моря |
| Slitherfish Island | Склизкий остров | P: [каталог](https://pf2.ru/toponyms/slitherfish%20island); Путеводитель по региону Внутреннего Моря |
| Smuggler's Shiv | Заточка | P: [каталог](https://pf2.ru/toponyms/smuggler%27s%20shiv);  The Mwangi Expanse |
| Sodden Lands | Сырые земли | P: [каталог](https://pf2.ru/toponyms/sodden%20lands);  The Mwangi Expanse |
| Sokar's Boil | Нарыв Сокара | P: [каталог](https://pf2.ru/toponyms/sokar%27s%20boil); Путеводитель по региону Внутреннего Моря |
| Solanas | Соланас | P: [каталог](https://pf2.ru/toponyms/solanas); Путеводитель по региону Внутреннего Моря |
| Solku | Солку | P: [каталог](https://pf2.ru/toponyms/solku); Путеводитель по миру |
| Songbai | Сунбай | P: [каталог](https://pf2.ru/toponyms/songbai); Тянь-Ша. Путеводитель по миру |
| Songil Sea | Море Сонгиль | P: [каталог](https://pf2.ru/toponyms/songil%20sea); Тянь-Ша. Путеводитель по миру |
| Sothis | Созис | K: [маркер 330200](https://app.kanka.io/w/227989/entities/5472656/map/markers/330200) |
| Souston | Саустон | P: [каталог](https://pf2.ru/toponyms/souston);  Shining Kingdoms |
| Southern Fangwood | Южное Клыколесье | P: [каталог](https://pf2.ru/toponyms/southern%20fangwood); Путеводитель по миру |
| Southern Hymbrian Forest | Южный Химбрийский лес | P: [каталог](https://pf2.ru/toponyms/southern%20hymbrian%20forest);  Shining Kingdoms |
| Southern Tapur Forest | Лес Южный Тапур | P: [каталог](https://pf2.ru/toponyms/southern%20tapur%20forest); Путеводитель по региону Внутреннего Моря |
| Southern Usk River | Река Южный Уск | P: [каталог](https://pf2.ru/toponyms/southern%20usk%20river); Путеводитель по региону Внутреннего Моря |
| Spellscar Desert | Чаровная пустыня | P: [каталог](https://pf2.ru/toponyms/spellscar%20desert);  Impossible Lands |
| Sphinx Head | Голова Сфинкса | P: [каталог](https://pf2.ru/toponyms/sphinx%20head); Путеводитель по региону Внутреннего Моря |
| Spider Island | Паучий остров | P: [каталог](https://pf2.ru/toponyms/spider%20island); Путеводитель по региону Внутреннего Моря |
| Spire of Nex | Шпиль Некса | P: [каталог](https://pf2.ru/toponyms/spire%20of%20nex);  Absalom, City of Lost Omens |
| Spry's Heart | Спрайсхарт | P: [каталог](https://pf2.ru/toponyms/spry%27s%20heart); Путеводитель по региону Внутреннего Моря |
| Stalak River | Река Сталак | P: [каталог](https://pf2.ru/toponyms/stalak%20river); Путеводитель по региону Внутреннего Моря |
| Star Bay | Звёздный залив | P: [каталог](https://pf2.ru/toponyms/star%20bay);  Shining Kingdoms |
| Star Keep | Звёздная Цитадель | P: [каталог](https://pf2.ru/toponyms/star%20keep); Путеводитель по региону Внутреннего Моря |
| Starfall | Звездопад | T |
| Stark Point | Последний Рубеж | P: [каталог](https://pf2.ru/toponyms/stark%20point);  The Mwangi Expanse |
| Starstone Cathedral | Собор Звездного камня | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:563](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L563) |
| Stasis Fields | Поля Стазиса | P: [каталог](https://pf2.ru/toponyms/stasis%20fields);  The Mwangi Expanse |
| Stavian's Hold | Ставианова Цитадель | P: [каталог](https://pf2.ru/toponyms/stavian%27s%20hold);  Shining Kingdoms |
| Stavintower | Ставинтауэр | P: [каталог](https://pf2.ru/toponyms/stavintower);  Shining Kingdoms |
| Steaming Sea | Дымящееся море | K: [маркер 249839](https://app.kanka.io/w/227989/entities/5472656/map/markers/249839) |
| Stepped Tower of Djedefar | Ступенчатая пирамида Дьедефар | P: [каталог](https://pf2.ru/toponyms/stepped%20tower%20of%20djedefar); Путеводитель по региону Внутреннего Моря |
| Stetven River | Река Стетвен | P: [каталог](https://pf2.ru/toponyms/stetven%20river); Путеводитель по региону Внутреннего Моря |
| Steyr | Стейр | P: [каталог](https://pf2.ru/toponyms/steyr);  Shining Kingdoms |
| Stoneclimb | Круча | P: [каталог](https://pf2.ru/toponyms/stoneclimb); Путеводитель по региону Внутреннего Моря |
| Stonespine Island | Остров Каменного Хребта | P: [каталог](https://pf2.ru/toponyms/stonespine%20island); Путеводитель по региону Внутреннего Моря |
| Stony Mountains | Каменистые горы | P: [каталог](https://pf2.ru/toponyms/stony%20mountains); Путеводитель по региону Внутреннего Моря |
| Storasta | Стораста | P: [каталог](https://pf2.ru/toponyms/storasta); Путеводитель по миру |
| Stormflood River | Ливневая река | P: [каталог](https://pf2.ru/toponyms/stormflood%20river);  Shining Kingdoms |
| Stormspear Hills | Холмы Грозового Копья | P: [каталог](https://pf2.ru/toponyms/stormspear%20hills); Путеводитель по региону Внутреннего Моря |
| Stormspear Mountains | Горы Грозового Копья | P: [каталог](https://pf2.ru/toponyms/stormspear%20mountains); Путеводитель по региону Внутреннего Моря |
| Storval Deep | Сторвальский омут | P: [каталог](https://pf2.ru/toponyms/storval%20deep); Путеводитель по региону Внутреннего Моря |
| Storval River | Река Сторваль | P: [каталог](https://pf2.ru/toponyms/storval%20river); Путеводитель по региону Внутреннего Моря |
| Storval Stairs | Сторвальские ступени | P: [каталог](https://pf2.ru/toponyms/storval%20stairs); Путеводитель по региону Внутреннего Моря |
| Stygia | Стигия | T |
| Sulfur River | Серная река | P: [каталог](https://pf2.ru/toponyms/sulfur%20river); Путеводитель по региону Внутреннего Моря |
| Summermelt River | Талая река | P: [каталог](https://pf2.ru/toponyms/summermelt%20river); Путеводитель по региону Внутреннего Моря |
| Sun Dagger | Солнечный Клинок | P: [каталог](https://pf2.ru/toponyms/sun%20dagger);  Shining Kingdoms |
| Sunder Horn | Сандерхорн | P: [каталог](https://pf2.ru/toponyms/sunder%20horn); Путеводитель по региону Внутреннего Моря |
| Sunken Queen | Затонувшая Королева | P: [каталог](https://pf2.ru/toponyms/sunken%20queen); Путеводитель по региону Внутреннего Моря |
| Surat Prakan | Сурат Пракан | P: [каталог](https://pf2.ru/toponyms/surat%20prakan); Тянь-Ша. Путеводитель по миру |
| Syranita's Aerie | Дом Сираниты | P: [каталог](https://pf2.ru/toponyms/syranita%27s%20aerie); Путеводитель по региону Внутреннего Моря |
| Szamrak's Haven | Убежище Самрака | T |
| Taggoret | Таггорет | K: [маркер 282766](https://app.kanka.io/w/227989/entities/5472656/map/markers/282766) |
| Taggun Hold | Оплот Таггуна | P: [каталог](https://pf2.ru/toponyms/taggun%20hold); Путеводитель по региону Внутреннего Моря |
| Taldor | Талдор | K: [маркер 282793](https://app.kanka.io/w/227989/entities/5472656/map/markers/282793) |
| Tamiir-Quah | Тамир-Куа | R: [source/ancestries_and_backgrounds/ancestries/human.rst:590](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/ancestries/human.rst#L590) |
| Tamran | Тамран | K: [маркер 277943](https://app.kanka.io/w/227989/entities/5472656/map/markers/277943) |
| Tamrivena | Тамривена | P: [каталог](https://pf2.ru/toponyms/tamrivena); Путеводитель по региону Внутреннего Моря |
| Tandak Plains | Равнина Тандак | P: [каталог](https://pf2.ru/toponyms/tandak%20plains);  Shining Kingdoms |
| Tang Mai | Тан Май | P: [каталог](https://pf2.ru/toponyms/tang%20mai); Тянь-Ша. Путеводитель по миру |
| Tanglebriar | Темнотёрн | P: [каталог](https://pf2.ru/toponyms/tanglebriar); P; исправлена прежняя неточная транскрипция |
| Tar Kuata | Тар-Куата | P: [каталог](https://pf2.ru/toponyms/tar%20kuata); Путеводитель по миру |
| Tar-Kazmukh | Тар-Казмук | P: [каталог](https://pf2.ru/toponyms/tar-kazmukh);  Shining Kingdoms |
| Tazion | Тацион | P: [каталог](https://pf2.ru/toponyms/tazion); Путеводитель по региону Внутреннего Моря |
| Tazuni | Тазуни | P: [каталог](https://pf2.ru/toponyms/tazuni); Пушки и шестерни |
| Tempest Cay | Бурная отмель | P: [каталог](https://pf2.ru/toponyms/tempest%20cay); Путеводитель по региону Внутреннего Моря |
| Temple of An-Alak | Храм Ан-Алак | P: [каталог](https://pf2.ru/toponyms/temple%20of%20an-alak); Путеводитель по региону Внутреннего Моря |
| Temple of the Elk | Храм Оленя | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `05c0b9be-f8f0-4128-9104-5791a785b88e` |
| Temple of the Eternal Obelisk | Храм Вечного Обелиска | P: [каталог](https://pf2.ru/toponyms/temple%20of%20the%20eternal%20obelisk); Путеводитель по региону Внутреннего Моря |
| Temple of the Ravenous Moon | Храм Ненасытной Луны | P: [каталог](https://pf2.ru/toponyms/temple%20of%20the%20ravenous%20moon); Путеводитель по региону Внутреннего Моря |
| Temples of Pharaoh Ahn | Храмы фараона Ана | P: [каталог](https://pf2.ru/toponyms/temples%20of%20pharaoh%20ahn); Путеводитель по региону Внутреннего Моря |
| Tephu | Тефу | P: [каталог](https://pf2.ru/toponyms/tephu); Путеводитель по миру |
| Terwa Lake | Озеро Теруа | P: [каталог](https://pf2.ru/toponyms/terwa%20lake);  The Mwangi Expanse |
| Terwa River | Река Теруа | P: [каталог](https://pf2.ru/toponyms/terwa%20river);  The Mwangi Expanse |
| Terwa Uplands | Возвышенности Тэрва | T |
| The Welt | Рубец | K: [маркер 280066](https://app.kanka.io/w/227989/entities/5472656/map/markers/280066) |
| Thom | Том | P: [каталог](https://pf2.ru/toponyms/thom); Путеводитель по региону Внутреннего Моря |
| Thorn River | Тернистая река | O: [RU](https://github.com/EugVV/PFKM-ru), [EN](https://github.com/akintos/pathfinder-translation/blob/master/locale/enGB.json); GUID `82048814-f2ed-4cea-8f88-58467553ae2b` |
| Thorn's End | Терновый Шип | P: [каталог](https://pf2.ru/toponyms/thorn%27s%20end); Путеводитель по региону Внутреннего Моря |
| Thoska Isle | Остров Тоска | P: [каталог](https://pf2.ru/toponyms/thoska%20isle); Путеводитель по региону Внутреннего Моря |
| Thousand Voices | Стоголосье | P: [каталог](https://pf2.ru/toponyms/thousand%20voices); Серия приключений Kingmaker |
| Three Craters | Три Кратера | P: [каталог](https://pf2.ru/toponyms/three%20craters); Пушки и шестерни |
| Three Pines Ford | Брод Трёх Сосен | P: [каталог](https://pf2.ru/toponyms/three%20pines%20ford);  Knights of Lastwall |
| Three Stars | Три Звезды | P: [каталог](https://pf2.ru/toponyms/three%20stars); Путеводитель по региону Внутреннего Моря |
| Thronestep | Тронная ступень | K: [маркер 273723](https://app.kanka.io/w/227989/entities/5472656/map/markers/273723) |
| Thrushmoor | Дроздовые Топи | P: [каталог](https://pf2.ru/toponyms/thrushmoor); Путеводитель по региону Внутреннего Моря |
| Thrylheim | Трайлхейм | P: [каталог](https://pf2.ru/toponyms/thrylheim);  Shining Kingdoms |
| Thunder Steppes | Громовые степи | P: [каталог](https://pf2.ru/toponyms/thunder%20steppes); Путеводитель по региону Внутреннего Моря |
| Thundering River | Гремящая река | P: [каталог](https://pf2.ru/toponyms/thundering%20river); Путеводитель по региону Внутреннего Моря |
| Thunderscale Warrens | Громочешуйные норы | P: [каталог](https://pf2.ru/toponyms/thunderscale%20warrens); Путеводитель по региону Внутреннего Моря |
| Thuryan | Туриан | P: [каталог](https://pf2.ru/toponyms/thuryan); Путеводитель по региону Внутреннего Моря |
| Thuvia | Тувия | K: [маркер 330059](https://app.kanka.io/w/227989/entities/5472656/map/markers/330059) |
| Tian Xia | Тянь Ся | C |
| Tianjing | Тяньцинь | R: [source/ancestries_and_backgrounds/versatile_heritages/aasimar.rst:96](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/ancestries_and_backgrounds/versatile_heritages/aasimar.rst#L96) |
| Tiger Lords | Тигриные Лорды | R: [source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst:427](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst#L427) |
| Tiger's Eye Monastery | Монастырь Тигрового Ока | P: [каталог](https://pf2.ru/toponyms/tiger%27s%20eye%20monastery); Путеводитель по региону Внутреннего Моря |
| Tiven's Reed | Тивенсрид | P: [каталог](https://pf2.ru/toponyms/tiven%27s%20reed); Путеводитель по региону Внутреннего Моря |
| Tolemaida River | Река Толемайда | P: [каталог](https://pf2.ru/toponyms/tolemaida%20river); Путеводитель по региону Внутреннего Моря |
| Tolguth | Толгут | K: [маркер 259864](https://app.kanka.io/w/227989/entities/5472656/map/markers/259864) |
| Tomarsulk River | Река Томарсалк | P: [каталог](https://pf2.ru/toponyms/tomarsulk%20river); Путеводитель по региону Внутреннего Моря |
| Tomb of Emperors | Императорская гробница | P: [каталог](https://pf2.ru/toponyms/tomb%20of%20emperors); Путеводитель по региону Внутреннего Моря |
| Tomb of the Thousand Tusks | Гробница Тысячи Бивней | P: [каталог](https://pf2.ru/toponyms/tomb%20of%20the%20thousand%20tusks);  The Mwangi Expanse |
| Torch | Факел | P: [каталог](https://pf2.ru/toponyms/torch); Путеводитель по региону Внутреннего Моря |
| Tors of Levenies | Левенисские горы | P: [каталог](https://pf2.ru/toponyms/tors%20of%20levenies); Серия приключений Kingmaker |
| Totra | Тотра | P: [каталог](https://pf2.ru/toponyms/totra); Путеводитель по миру |
| Tourondel River | Река Турондель | P: [каталог](https://pf2.ru/toponyms/tourondel%20river); Путеводитель по региону Внутреннего Моря |
| Touvette | Тувет | P: [каталог](https://pf2.ru/toponyms/touvette); Путеводитель по региону Внутреннего Моря |
| Tower of Slant Shadows | Башня Косых Теней | P: [каталог](https://pf2.ru/toponyms/tower%20of%20slant%20shadows); Путеводитель по региону Внутреннего Моря |
| Trackless Storm | Песчаная буря | P: [каталог](https://pf2.ru/toponyms/trackless%20storm); Путеводитель по региону Внутреннего Моря |
| Tregan | Треган | P: [каталог](https://pf2.ru/toponyms/tregan);  Shining Kingdoms |
| Tribulation | Невзгода | P: [каталог](https://pf2.ru/toponyms/tribulation); Путеводитель по региону Внутреннего Моря |
| Triela | Триэла | P: [каталог](https://pf2.ru/toponyms/triela);  Shining Kingdoms |
| Trilmsgitt Towers | Башни Трильмсгиттов | P: [каталог](https://pf2.ru/toponyms/trilmsgitt%20towers); Путеводитель по региону Внутреннего Моря |
| Trollheim | Тролльхейм | K: [маркер 259858](https://app.kanka.io/w/227989/entities/5472656/map/markers/259858) |
| Trunau | Трунау | P: [каталог](https://pf2.ru/toponyms/trunau); Путеводитель по региону Внутреннего Моря |
| Tulger River | Река Тальгер | P: [каталог](https://pf2.ru/toponyms/tulger%20river); Путеводитель по региону Внутреннего Моря |
| Turanian Hills | Туранские холмы | P: [каталог](https://pf2.ru/toponyms/turanian%20hills); Путеводитель по региону Внутреннего Моря |
| Turtleback Ferry | Черепаший Паром | P: [каталог](https://pf2.ru/toponyms/turtleback%20ferry); Путеводитель по региону Внутреннего Моря |
| Turvanar River | Река Турванар | P: [каталог](https://pf2.ru/toponyms/turvanar%20river); Путеводитель по региону Внутреннего Моря |
| Tusk Mountains | Бивневые горы | P: [каталог](https://pf2.ru/toponyms/tusk%20mountains); Путеводитель по миру |
| Tuskwater | Клыководье | P: [каталог](https://pf2.ru/toponyms/tuskwater); Серия приключений Kingmaker |
| Twingate | Двойные Врата | P: [каталог](https://pf2.ru/toponyms/twingate);  Shining Kingdoms |
| Two Tree Island | Остров Два Дерева | P: [каталог](https://pf2.ru/toponyms/two%20tree%20island); Путеводитель по региону Внутреннего Моря |
| Tymon | Тимон | K: [маркер 260100](https://app.kanka.io/w/227989/entities/5472656/map/markers/260100) |
| Tyrant's Grasp | Хватка Тирана | R: [source/books/Secrets-of-Magic/Pervasive-Magic.rst:565](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Secrets-of-Magic/Pervasive-Magic.rst#L565) |
| Ulcazar | Ульказар | P: [каталог](https://pf2.ru/toponyms/ulcazar); Путеводитель по региону Внутреннего Моря |
| Uldani Necropolis | Некрополь Ульдани | P: [каталог](https://pf2.ru/toponyms/uldani%20necropolis); Путеводитель по региону Внутреннего Моря |
| Umbral Basin | Чаша Теней | P: [каталог](https://pf2.ru/toponyms/umbral%20basin); Путеводитель по региону Внутреннего Моря |
| Umnyango | Умнянго | P: [каталог](https://pf2.ru/toponyms/umnyango);  The Mwangi Expanse |
| Umok | Умок | P: [каталог](https://pf2.ru/toponyms/umok); Путеводитель по региону Внутреннего Моря |
| Undarin | Ундарин | P: [каталог](https://pf2.ru/toponyms/undarin); Путеводитель по миру |
| Underdunes | Междюнье | P: [каталог](https://pf2.ru/toponyms/underdunes); Путеводитель по региону Внутреннего Моря |
| Urgir | Ургир | T |
| Urglin | Урглин | K: [маркер 259844](https://app.kanka.io/w/227989/entities/5472656/map/markers/259844) |
| Uringen | Уринген | P: [каталог](https://pf2.ru/toponyms/uringen); Путеводитель по региону Внутреннего Моря |
| Usaro | Узаро | P: [каталог](https://pf2.ru/toponyms/usaro);  The Mwangi Expanse, Война бессмертных |
| Usk Lake | Озеро Уск | P: [каталог](https://pf2.ru/toponyms/usk%20lake); Путеводитель по региону Внутреннего Моря |
| Usk River | Река Уск | P: [каталог](https://pf2.ru/toponyms/usk%20river); Путеводитель по региону Внутреннего Моря |
| Uskwood | Асквуд | K: [маркер 281685](https://app.kanka.io/w/227989/entities/5472656/map/markers/281685) |
| Ustalav | Усталав | T |
| Ustradi River | Река Устради | P: [каталог](https://pf2.ru/toponyms/ustradi%20river);  Impossible Lands |
| Uta River | Река Юта | P: [каталог](https://pf2.ru/toponyms/uta%20river); Путеводитель по региону Внутреннего Моря |
| Vaishau Ruin | Руины Вайшау | P: [каталог](https://pf2.ru/toponyms/vaishau%20ruin);  Knights of Lastwall |
| Valas's Gift | Дар Валаса | P: [каталог](https://pf2.ru/toponyms/valas%27s%20gift); Путеводитель по региону Внутреннего Моря |
| Valash Raj | Валаш Радж | P: [каталог](https://pf2.ru/toponyms/valash%20raj); Тянь-Ша. Путеводитель по миру |
| Valashmai Jungle | Джунгли Валашмай | P: [каталог](https://pf2.ru/toponyms/valashmai%20jungle); Тянь-Ша. Путеводитель по миру |
| Valashmai Sea | Море Валашмай | P: [каталог](https://pf2.ru/toponyms/valashmai%20sea); Тянь-Ша. Путеводитель по миру |
| Valley of Fire | Огненная долина | P: [каталог](https://pf2.ru/toponyms/valley%20of%20fire); Путеводитель по региону Внутреннего Моря |
| Vanji River | Река Ванджи | P: [каталог](https://pf2.ru/toponyms/vanji%20river);  The Mwangi Expanse |
| Varisia | Варисия | T |
| Varisian Gulf | Варисийский залив | P: [каталог](https://pf2.ru/toponyms/varisian%20gulf); Путеводитель по региону Внутреннего Моря |
| Varnhold | Варнхолд | R: [source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst:419](https://gitlab.com/pf2e_ru/pf2e_ru_translation/-/blob/b054074ba1388edcc99ac37e951c8e77c6d2c79d/source/books/Kingmaker/Kingdoms/Kingdom-Skills.rst#L419) |
| Varno | Варно | P: [каталог](https://pf2.ru/toponyms/varno); Путеводитель по региону Внутреннего Моря |
| Vault of Silver and Ice | Подземелье Серебра и Льда | P: [каталог](https://pf2.ru/toponyms/vault%20of%20silver%20and%20ice); Путеводитель по региону Внутреннего Моря |
| Vauntil | Вонтиль | P: [каталог](https://pf2.ru/toponyms/vauntil); Путеводитель по региону Внутреннего Моря |
| Veedesha | Видеша | P: [каталог](https://pf2.ru/toponyms/veedesha);  Impossible Lands |
| Velashu River | Река Велашу | P: [каталог](https://pf2.ru/toponyms/velashu%20river); Путеводитель по региону Внутреннего Моря |
| Velashu Uplands | Нагорье Велашу | P: [каталог](https://pf2.ru/toponyms/velashu%20uplands); Путеводитель по региону Внутреннего Моря |
| Veldraine | Вельдрайн | P: [каталог](https://pf2.ru/toponyms/veldraine); Путеводитель по региону Внутреннего Моря |
| Vellumis | Веллумис | K: [маркер 277930](https://app.kanka.io/w/227989/entities/5472656/map/markers/277930) |
| Verduran Forest | Вердюранский лес | T |
| Verduran Fork | Вердуранская развилка | P: [каталог](https://pf2.ru/toponyms/verduran%20fork);  Shining Kingdoms |
| Vergan Forest | Верганский лес | P: [каталог](https://pf2.ru/toponyms/vergan%20forest); Путеводитель по региону Внутреннего Моря |
| Versex | Версекс | P: [каталог](https://pf2.ru/toponyms/versex); Путеводитель по региону Внутреннего Моря |
| Vhatsuntide River | Река Ватсунтайд | P: [каталог](https://pf2.ru/toponyms/vhatsuntide%20river); Путеводитель по региону Внутреннего Моря |
| Vidrian | Видриан | T |
| Vieland | Велан | P: [каталог](https://pf2.ru/toponyms/vieland); Путеводитель по региону Внутреннего Моря |
| Vigil | Бдение | K: [маркер 277926](https://app.kanka.io/w/227989/entities/5472656/map/markers/277926) |
| Viperwall | Змеиная Стена | P: [каталог](https://pf2.ru/toponyms/viperwall); Путеводитель по региону Внутреннего Моря |
| Virlych | Вирлич | P: [каталог](https://pf2.ru/toponyms/virlych); Путеводитель по миру |
| Vische | Виш | P: [каталог](https://pf2.ru/toponyms/vische); Путеводитель по региону Внутреннего Моря |
| Vistear River | Река Вистир | P: [каталог](https://pf2.ru/toponyms/vistear%20river); Путеводитель по региону Внутреннего Моря |
| Voluse | Волюз | P: [каталог](https://pf2.ru/toponyms/voluse); Путеводитель по региону Внутреннего Моря |
| Vudra | Вудра | P: [каталог](https://pf2.ru/toponyms/vudra); Основная книга ведущего |
| Vurnirn | Вурнирн | P: [каталог](https://pf2.ru/toponyms/vurnirn); Рёв дикой природы |
| Vyalldehun River | Река Вьяльдехуна | P: [каталог](https://pf2.ru/toponyms/vyalldehun%20river); Путеводитель по региону Внутреннего Моря |
| Vyre | Вир | K: [маркер 281687](https://app.kanka.io/w/227989/entities/5472656/map/markers/281687) |
| Vyre Island | Остров Вир | P: [каталог](https://pf2.ru/toponyms/vyre%20island); P + E: согласовано с сохранённым именем города Vyre — Вир |
| Walking Man | Шагающий Человек | P: [каталог](https://pf2.ru/toponyms/walking%20man);  Shining Kingdoms |
| Wall of Heaven | Небесная Стена | P: [каталог](https://pf2.ru/toponyms/wall%20of%20heaven); Тянь-Ша. Путеводитель по миру |
| Wandering Spheres | Небесные Сферы | P: [каталог](https://pf2.ru/toponyms/wandering%20spheres);  Shining Kingdoms |
| Wanshou | Ваньшоу | T |
| Warlock Island | Остров Колдуна | P: [каталог](https://pf2.ru/toponyms/warlock%20island); Путеводитель по региону Внутреннего Моря |
| Wartle | Уортл | P: [каталог](https://pf2.ru/toponyms/wartle); Путеводитель по региону Внутреннего Моря |
| Wati | Уати | K: [маркер 330203](https://app.kanka.io/w/227989/entities/5472656/map/markers/330203) |
| Wayward River | Капризная река | P: [каталог](https://pf2.ru/toponyms/wayward%20river); Путеводитель по региону Внутреннего Моря |
| Well of Lies | Кладезь Лжи | P: [каталог](https://pf2.ru/toponyms/well%20of%20lies);  Impossible Lands |
| West Sellen River | Река Западный Селлен | P: [каталог](https://pf2.ru/toponyms/west%20sellen%20river); Путеводитель по миру |
| Westcrown | Вэсткраун | T |
| Western Ravage | Западный Разор | P: [каталог](https://pf2.ru/toponyms/western%20ravage); Путеводитель по региону Внутреннего Моря |
| Westpool | Вестпул | P: [каталог](https://pf2.ru/toponyms/westpool); Путеводитель по региону Внутреннего Моря |
| Whisperfall Pass | Перевал Висперфол | P: [каталог](https://pf2.ru/toponyms/whisperfall%20pass); Путеводитель по региону Внутреннего Моря |
| Whispertruth | Шёпот Правды | P: [каталог](https://pf2.ru/toponyms/whispertruth); Путеводитель по региону Внутреннего Моря |
| Whisperwood | Шепчущий лес | K: [маркер 281693](https://app.kanka.io/w/227989/entities/5472656/map/markers/281693) |
| Whistledown | Свистящий Холм | P: [каталог](https://pf2.ru/toponyms/whistledown); Путеводитель по региону Внутреннего Моря |
| White Canyon | Белый каньон | P: [каталог](https://pf2.ru/toponyms/white%20canyon); Путеводитель по региону Внутреннего Моря |
| Whitegold River | Река Белое Золото | P: [каталог](https://pf2.ru/toponyms/whitegold%20river); Путеводитель по региону Внутреннего Моря |
| Whiterook | Белый Грач | P: [каталог](https://pf2.ru/toponyms/whiterook); Путеводитель по региону Внутреннего Моря |
| Whitethrone | Белый трон | K: [маркер 249889](https://app.kanka.io/w/227989/entities/5472656/map/markers/249889) |
| Whyrlis Rock | Скала Вирлиса | P: [каталог](https://pf2.ru/toponyms/whyrlis%20rock); Путеводитель по региону Внутреннего Моря |
| Widowmaker Isle | Разлучный остров | P: [каталог](https://pf2.ru/toponyms/widowmaker%20isle); Путеводитель по региону Внутреннего Моря |
| Wilewood | Хитролесье | P: [каталог](https://pf2.ru/toponyms/wilewood); Путеводитель по региону Внутреннего Моря |
| Wilkesmont | Уилксмонт | P: [каталог](https://pf2.ru/toponyms/wilkesmont); P + E: практическая транскрипция Wilkes вместо Уйлкс |
| Willowshore | Ивобрежье | P: [каталог](https://pf2.ru/toponyms/willowshore);  Season of Ghosts Players Guide |
| Willowside | Ивовый край | K: [маркер 280057](https://app.kanka.io/w/227989/entities/5472656/map/markers/280057) |
| Windsong Abbey | Монастырь Песни Ветра | P: [каталог](https://pf2.ru/toponyms/windsong%20abbey); Путеводитель по региону Внутреннего Моря |
| Winter Grove | Зимняя Роща | T |
| Winterbreak | Винтербрейк | P: [каталог](https://pf2.ru/toponyms/winterbreak); Путеводитель по региону Внутреннего Моря |
| Winterbreak Bay | Залив Винтербрейк | P: [каталог](https://pf2.ru/toponyms/winterbreak%20bay); Путеводитель по региону Внутреннего Моря |
| Winterwall Glacier | Ледник Зимняя Стена | P: [каталог](https://pf2.ru/toponyms/winterwall%20glacier); Путеводитель по миру |
| Wispil | Виспил | K: [маркер 282776](https://app.kanka.io/w/227989/entities/5472656/map/markers/282776) |
| Witchbole | Ведьмин Кряж | P: [каталог](https://pf2.ru/toponyms/witchbole); Война бессмертных |
| Witherbark Forest | Чахлый лес | P: [каталог](https://pf2.ru/toponyms/witherbark%20forest); Путеводитель по региону Внутреннего Моря |
| Wolf's Ear | Волчье Ухо | P: [каталог](https://pf2.ru/toponyms/wolf%27s%20ear); Путеводитель по региону Внутреннего Моря |
| Wolf's Tooth | Волчий Зуб | P: [каталог](https://pf2.ru/toponyms/wolf%27s%20tooth); Путеводитель по региону Внутреннего Моря |
| Wolfpoint | Волчарня | P: [каталог](https://pf2.ru/toponyms/wolfpoint); Путеводитель по региону Внутреннего Моря |
| Wolfrun Hills | Волчьи холмы | P: [каталог](https://pf2.ru/toponyms/wolfrun%20hills);  Shining Kingdoms |
| Woodsedge | Вудсэдж | P: [каталог](https://pf2.ru/toponyms/woodsedge);  Shining Kingdoms |
| World's Edge Mountains | Горы на краю света | K: [маркер 282784](https://app.kanka.io/w/227989/entities/5472656/map/markers/282784) |
| Worldwound | Мировая Язва | T |
| Wormwood Hall | Полынный дом | P: [каталог](https://pf2.ru/toponyms/wormwood%20hall); Путеводитель по региону Внутреннего Моря |
| Wyvern Mountains | Виверновые горы | P: [каталог](https://pf2.ru/toponyms/wyvern%20mountains); Путеводитель по региону Внутреннего Моря |
| Wyvern's Roost | Виверновы Гнездовища | P: [каталог](https://pf2.ru/toponyms/wyvern%27s%20roost); Путеводитель по региону Внутреннего Моря |
| Wyvernkill River | Виверновая река | P: [каталог](https://pf2.ru/toponyms/wyvernkill%20river); Путеводитель по региону Внутреннего Моря |
| Wyvernsting | Жало виверны | K: [маркер 277923](https://app.kanka.io/w/227989/entities/5472656/map/markers/277923) |
| Xa Hoi | За Хой | T |
| Xefon-Ra | Ксефон-Ра | P: [каталог](https://pf2.ru/toponyms/xefon-ra); Путеводитель по региону Внутреннего Моря |
| Xer | Ксер | P: [каталог](https://pf2.ru/toponyms/xer); Путеводитель по региону Внутреннего Моря |
| Xin-Edasseril | Зин-Эдассерил | T |
| Xin-Shalast | Зин-Шаласт | K: [маркер 255051](https://app.kanka.io/w/227989/entities/5472656/map/markers/255051) |
| Xiwu | Сиу | P: [каталог](https://pf2.ru/toponyms/xiwu); Тянь-Ша. Путеводитель по миру |
| Xopatl | Шопатль | P: [каталог](https://pf2.ru/toponyms/xopatl); Пушки и шестерни |
| Yanimere Island | Остров Янимер | P: [каталог](https://pf2.ru/toponyms/yanimere%20island); Путеводитель по региону Внутреннего Моря |
| Yanmass | Янмасс | K: [маркер 282785](https://app.kanka.io/w/227989/entities/5472656/map/markers/282785) |
| Yavipho | Явифо | P: [каталог](https://pf2.ru/toponyms/yavipho); Путеводитель по региону Внутреннего Моря |
| Yhalt River | Река Ихальт | P: [каталог](https://pf2.ru/toponyms/yhalt%20river); Путеводитель по региону Внутреннего Моря |
| Yin-Sichasi | Инь-Сичаси | P: [каталог](https://pf2.ru/toponyms/yin-sichasi); Тянь-Ша. Путеводитель по миру |
| Yled | Айлед | P: [каталог](https://pf2.ru/toponyms/yled);  Impossible Lands |
| Yolubilis River | Река Йолубилис | P: [каталог](https://pf2.ru/toponyms/yolubilis%20river); Путеводитель по региону Внутреннего Моря |
| Yondabakari River | Река Йондабакари | P: [каталог](https://pf2.ru/toponyms/yondabakari%20river); Путеводитель по региону Внутреннего Моря |
| Zetang | Цзэтан | P: [каталог](https://pf2.ru/toponyms/zetang); Тянь-Ша. Путеводитель по миру |
| Zho Mountains | Горы Зо | P: [каталог](https://pf2.ru/toponyms/zho%20mountains); Путеводитель по региону Внутреннего Моря |
| Zi Ha | Зи Ха | P: [каталог](https://pf2.ru/toponyms/zi%20ha); Тянь-Ша. Путеводитель по миру |
| Zimar | Зимар | K: [маркер 282780](https://app.kanka.io/w/227989/entities/5472656/map/markers/282780) |
| Zolurket Mines | Копи Золуркет | P: [каталог](https://pf2.ru/toponyms/zolurket%20mines); Путеводитель по региону Внутреннего Моря |
| Zom Kullan | Зом Куллан | P: [каталог](https://pf2.ru/toponyms/zom%20kullan); Тянь-Ша. Путеводитель по миру |
| Zura's Mouth | Уста Зуры | P: [каталог](https://pf2.ru/toponyms/zura%27s%20mouth); Путеводитель по региону Внутреннего Моря |

## Расхождения с каталогом pf2.ru

В таблице перечислены альтернативы; выбранный вариант в модуле указан явно.

| English | В модуле | В pf2.ru |
| --- | --- | --- |
| Absalom | Абсалом | Авессалом |
| Arzikal | Арзикаль | Азрикаль |
| Almas | Алмас | Альмас |
| Arch of Aroden | Арка Ародена | Арка Ародера |
| Augustana | Августана | Аугустана |
| Barrier Wall | Барьерная Стена | Барьерные горы |
| Whitethrone | Белый трон | Белый Трон |
| Bildt | Бильдт | Бильд |
| Brastlewark | Брастлварк | Брастварк |
| Vyre | Вир | Вайр |
| Verduran Forest | Вердюранский лес | Вердуранский лес |
| Westcrown | Вэсткраун | Весткраун |
| Gallowspire | Гэллоуспайр | Висельная башня |
| Screaming Jungle | Кричащие Джунгли | Вопящие джунгли |
| Thronestep | Тронная ступень | Восхождение |
| Eye of Abendego | Око Абендего | Глаз Абендего |
| Mindspin Mountains | Головокружительные Горы | Головокружительные горы |
| Delmon's Glen | Делмонова лощина | Делмонова лоищна |
| Jalmeray | Джалмерэй | Джалмерей |
| Janderhoff | Джандерхофф | Джандерхоф |
| Mwangi Jungle | Джунгли Муанги | джунгли Мванги |
| Diobel | Диобэль | Диобель |
| Darkmoon Vale | Долина Темнолунья | долина Темнолунья |
| Shudderwood | Трепещущий лес | Дрожащий лес |
| Devil's Perch | Насест дьявола | Дьяволов Насест |
| Wyvernsting | Жало виверны | Жало Виверны |
| Fever Sea | Лихорадящее море | Жаркое море |
| Shattered Range | Расколотый Хребет | Зазубренный хребет |
| Feasting Hall of Cayden Cailean | Зал пиршеств Кайдена Кайлина | Зал праздненств Кайдена Кайлина |
| Icerift Castle | Дворец в Ледяном ущелье | замок Ледяной Разлом |
| Winter Grove | Зимняя Роща | Зимняя роща |
| Xin-Edasseril | Зин-Эдассерил | Зин-Эдассурил |
| Isarn | Исарн | Изарн |
| Illmarsh | Иллмарш | Ильмарш |
| Icerime River | Инеистая река | Инистая река |
| Icerime Peaks | Инеистые пики | Инистые пики |
| Jol | Джол | Йоль |
| Boarwood | Кобаньелесье | Кабаний лес |
| Canorate | Канорейт | Канорат |
| Kaoling | Каолин | Каолинь |
| Kyonin | Кьонин | Кионин |
| Kodar Mountains | Кодарский хребет | Кодарские горы |
| Mordant Spire | Острый шпиль | Колкая Вершина |
| Kortos Mounts | Горы Кортос | Кортосские горы |
| Korholm | Корхолм | Корхольм |
| Gozreh's Pool | Купальня Гозрея | Купальня Гозрей |
| Port Ice | Порт Лед | Ледяная Гавань |
| Ice Spire | Ледяной шпиль | Ледяной Шпиль |
| Icestair | Айсстэр | Ледяные Ступени |
| Grungir Forest | Грунгирский лес | лес Грунгир |
| Palakar Forest | Палакарский лес | лес Палакар |
| Uskwood | Асквуд | лес Уск |
| Fierani Forest | Лес Фиерани | лес Фиэрани |
| Estrovian Forest | Эстровианская чащоба | лес Эстровиан |
| Gravelands | Могильные Земли | Могильники |
| Barrowood | Барровуд | Могильный лес |
| High Seas | Открытое Море | Морские просторы |
| Terwa Uplands | Возвышенности Тэрва | нагорье Теруа |
| Skywatch | Небесный дозор | Небесная Стража |
| Vigil | Бдение | Недрёманная |
| Castle Everstand | Вековечная крепость | Неприступный замок |
| Nidal | Нидал | Нидаль |
| Nisroch | Нисрок | Нисрох |
| New Oppara | Новая Оппара | Новая Опарра |
| Lake Ocota | Озеро Окота | озеро Окота |
| Lake of Mists and Veils | Озеро туманных вуалей | озеро Туманов и Завес |
| Lake Encarthan | Озеро Энкартан | озеро Энкартан |
| Obari Ocean | Обарийский океан | океан Обари |
| Eye of Dread | Око ужаса | Око Ужаса |
| Dongun Hold | Донган Холд | Оплот Донгуна |
| Vyre Island | Остров Вир | остров Вайр |
| Isle of Kortos | Остров Кортос | остров Кортос |
| Isle of Terror | Остров ужаса | остров Ужаса |
| Isle of Erran | Остров Эрран | остров Эрран |
| Pangolais | Панголаис | Панголе |
| Nivakta's Crossing | Переправа Нивакты | Переправа Нивакта |
| Pezzack | Пеззак | Пецак |
| Candlestone Caverns | Пещеры Свечных камней | пещеры Свечного Камня |
| Dread Dungeons | Ужасающие подземелья | Подземелья Ужаса |
| Port Peril | Порт-Перил | Порт-Пэрил |
| Mwangi Expanse | Просторы Муанги | Просторы Мванги |
| Ravounel | Равунел | Равунель |
| Broken Lands | Разоренные Земли | Расколотые земли |
| Riverspire | Речной шпиль | Речной Шпиль |
| Ridwan | Ридван | Ридуан |
| Gardens of Shepeska | Сады Шепески | сады Шепеска |
| Xa Hoi | За Хой | Са-Хой |
| North Plains | Северные равнины | Севреные равнины |
| Sedeq | Седэк | Седек |
| Celwynvian | Сэльвинвиэн | Сельвинвиэн |
| Sevenarches | Семиарки | Семиарочье |
| Silver Mount | Серебряная гора | Серебряная Гора |
| Shining Kingdoms | Сияющие Королевства | Сияющие королевства |
| Miasmere | Миасмер | Смрадноморье |
| Path of Salt | Соляной путь | Соляной тракт |
| Sothis | Созис | Сотис |
| Sardis Township | Сардис | Стардис |
| Dragonfly River | Стрекозиная река | Стрекозинная река |
| Algidheart | Альгидхарт | Стылое Сердце |
| Ironbound Archipelago | Железный Архипелаг | Суровый архипелаг |
| Sandpoint | Сэндпоинт | Сэндпойнт |
| Tymon | Тимон | Таймон |
| Briarbough | Брайарбау | Терновая Чаща |
| Steaming Sea | Дымящееся море | Туманное море |
| Fog Peaks | Туманные вершины | Туманные пики |
| Tianjing | Тяньцинь | Тяньцзин |
| Tian Xia | Тянь Ся | Тянь-Ша |
| Wilkesmont | Уилксмонт | Уйлксмонт |
| Finder's Gulch | Ущелье искателя | ущелье Проводника |
| Hajoth Hakados | Хайот Хакадос | Хайот-Хакадос |
| Halgrim | Халгрим | Хальгрим |
| Hunthul | Хунтул | Хантхул |
| Menador Mountains | Горы Менадор | хребет Менадор |
| Quain | Куэйн | Цюаинь |
| Chesed | Чесед | Чезед |
| Shevaroth | Шэварос | Шеварот |
| Scarwall | Скарволл | Шрамовая Стена |
| Shenmen | Шенмэн | Шэньмэнь |
| Chitterwood | Читтервуд | Щебечущий лес |
| Erages | Эрэйжес | Эрагес |

## Другие варианты в goblin box


Сохранённый вариант в модуле имеет приоритет; эти соответствия не заменены автоматически.

| English | В модуле | В goblin box | Источник |
| --- | --- | --- | --- |
| Barrier Wall | Барьерная Стена | Ограждающая стена | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/330058) |
| Barrowood | Барровуд | Бэрровуд | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281692) |
| Broken Lands | Разоренные Земли | Разоренные земли | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282795) |
| Cheliax | Челия | Чилекс | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281938) |
| Crystalhurst | Кристалхёрст | Кристальная роща | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/277937) |
| Darkmoon Vale | Долина Темнолунья | Вуаль убывающей луны | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282767) |
| Droskar's Crag | Утёс Дроскара | Скала Дроскара | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282768) |
| Galt | Голт | Гальт | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282792) |
| High Seas | Открытое Море | Открытое море | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/249838) |
| Katheer | Катир | Катиир | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/312096) |
| Lands of the Linnorm Kings | Земли Королей Линнормов | Королевства линнормов | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/249885) |
| Mindspin Mountains | Головокружительные Горы | Хребет замешательств | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/277950) |
| Nidal | Нидал | Найдол | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281939) |
| Nirmathas | Нирмафас | Нирматэс | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/277956) |
| Nisroch | Нисрок | Нисрох | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281684) |
| Old Cheliax | Старая Челия | Старый Чилекс | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281911) |
| Pangolais | Панголаис | Панголайс | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/277946) |
| Ravounel | Равунел | Равунэль | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281941) |
| River Kingdoms | Речные Королевства | Речные королевства | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/273706) |
| Shining Kingdoms | Сияющие Королевства | Сияющие королевства | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282794) |
| Tanglebriar | Темнотёрн | Тэнглбрайер | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282758) |
| Tyrant's Grasp | Хватка Тирана | Хватка тирана | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/280064) |
| Verduran Forest | Вердюранский лес | Вердуранский лес | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/282775) |
| Westcrown | Вэсткраун | Весткраун | [маркер](https://app.kanka.io/w/227989/entities/5472656/map/markers/281691) |
