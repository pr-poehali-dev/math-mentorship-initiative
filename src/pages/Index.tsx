import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ваш ребёнок не понимает математику —
            <span className="text-blue-700">
              {" "}
              потому что ему её никто не объяснял по-настоящему
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Индивидуальные занятия с ментором с 40-летним опытом — без стресса,
            скуки и зубрёжки.
            <strong> Диагностика — бесплатно.</strong>
          </p>

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg"
          >
            <Icon name="Calendar" className="mr-2" />
            Записаться на диагностику
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="User" className="text-blue-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Индивидуально</h3>
              <p className="text-gray-600">Только ваш ребёнок и ментор</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" className="text-cyan-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Через понимание</h3>
              <p className="text-gray-600">Учим думать, а не зубрить</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" className="text-green-600" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900">Результат</h3>
              <p className="text-gray-600">Любовь к математике и учёбе</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему обычные репетиторы не работают?
            </h2>
            <p className="text-xl text-gray-600">
              90% детей учат математику, не понимая её сути. Мы это меняем.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Heart",
                title: "Не любит учиться",
                description: "Ребёнок отказывается делать домашние задания",
              },
              {
                icon: "Calculator",
                title: "Ненавидит математику",
                description: "При слове 'математика' начинается истерика",
              },
              {
                icon: "FileX",
                title: "Боится не сдать аттестацию",
                description: "Тревога за результаты экзаменов и контрольных",
              },
              {
                icon: "RotateCcw",
                title: "Может остаться на второй год",
                description: "Оценки критически низкие, грозит повтор класса",
              },
              {
                icon: "GraduationCap",
                title: "Не поступит в вуз",
                description:
                  "Без математики закрыты все престижные специальности",
              },
              {
                icon: "Clock",
                title: "Время уходит",
                description: "Каждый день промедления усугубляет ситуацию",
              },
            ].map((problem, index) => (
              <Card
                key={index}
                className="border-2 border-red-100 hover:border-red-200 transition-colors"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={problem.icon}
                      className="text-red-600"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <CardDescription>{problem.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как мы решаем эти проблемы
            </h2>
            <p className="text-xl text-gray-600">
              Ментор, а не просто репетитор. Работа с мышлением, а не просто с
              темами.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: "Target",
                  title: "Индивидуальный подход",
                  description:
                    "Всё под вашего ребёнка: уровень, темп, мотивация, цели",
                },
                {
                  icon: "Lightbulb",
                  title: "Развитие мышления",
                  description:
                    "Учим понимать суть, а не механически запоминать формулы",
                },
                {
                  icon: "Heart",
                  title: "Любовь к обучению",
                  description:
                    "Ребёнок начинает получать удовольствие от решения задач",
                },
                {
                  icon: "Shield",
                  title: "Уверенность в себе",
                  description:
                    "Формируем правильное отношение к ошибкам и трудностям",
                },
              ].map((solution, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={solution.icon}
                      className="text-blue-600"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Результат нашей работы:
              </h3>
              <ul className="space-y-4">
                {[
                  "Ребёнок понимает математику с сути",
                  "Появляется интерес и мотивация к учёбе",
                  "Формируется математическое мышление",
                  "Растёт уверенность в своих силах",
                  "Улучшаются оценки в школе",
                ].map((result, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-300" size={20} />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Знакомьтесь — ваш ментор
              </h2>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "За 40 лет работы я поняла: каждый ребёнок способен понять
                  математику. Нужно просто найти правильный подход к его
                  мышлению."
                </blockquote>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Марина Кармысова
                  </h3>
                  <p className="text-gray-600 mb-4">Ментор по математике</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <Icon
                        name="Calendar"
                        className="inline mr-2 text-blue-600"
                        size={16}
                      />
                      <span className="font-semibold">40 лет</span> опыта
                    </div>
                    <div>
                      <Icon
                        name="Users"
                        className="inline mr-2 text-blue-600"
                        size={16}
                      />
                      <span className="font-semibold">500+</span> учеников
                    </div>
                    <div>
                      <Icon
                        name="Award"
                        className="inline mr-2 text-blue-600"
                        size={16}
                      />
                      Менторский подход
                    </div>
                    <div>
                      <Icon
                        name="Star"
                        className="inline mr-2 text-blue-600"
                        size={16}
                      />
                      Работа с "трудными"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center">
                <Icon name="User" className="text-blue-600" size={120} />
              </div>
              <p className="text-gray-600 mt-4">Фото Марины Кармысовой</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Получите бесплатную диагностическую встречу
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Без обязательств. Только понимание, куда двигаться дальше.
          </p>

          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Имя ребёнка"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                Хочу на диагностику
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
