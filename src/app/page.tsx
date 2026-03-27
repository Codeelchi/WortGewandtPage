'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import {
  MessageCircle,
  Brain,
  Users,
  Sparkles,
  Shield,
  Smartphone,
  Download,
  ChevronRight,
  Heart,
  Zap,
  Target
} from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Die richtigen Worte finden',
      description: 'Finden Sie in jeder Gesprächssituation die passenden Worte. Nie wieder sprachlos sein, wenn es darauf ankommt.'
    },
    {
      icon: Shield,
      title: 'Selbstbewusst auftreten',
      description: 'Entwickeln Sie mehr Sicherheit in sozialen Interaktionen. Treten Sie selbstbewusst auf und hinterlassen Sie einen bleibenden Eindruck.'
    },
    {
      icon: Brain,
      title: 'Intelligente Gesprächsführung',
      description: 'Lernen Sie, Gespräche aktiv zu steuern und auf unterschiedliche Reaktionen vorbereitet zu sein.'
    },
    {
      icon: Users,
      title: 'Soziale Kompetenz stärken',
      description: 'Verbessern Sie Ihre zwischenmenschlichen Fähigkeiten und bauen Sie bessere Beziehungen auf.'
    },
    {
      icon: Zap,
      title: 'Schnelle Reaktionen',
      description: 'Trainieren Sie, spontan und treffsicher zu reagieren. Gewinnen Sie an rhetorischer Gewandtheit.'
    },
    {
      icon: Heart,
      title: 'Empathie entwickeln',
      description: 'Verstehen Sie besser, was Ihr Gegenüber meint, und reagieren Sie einfühlsam und angemessen.'
    }
  ]

  const situations = [
    'Kritikgespräche meistern',
    'Komplimente annehmen',
    'Schwierige Fragen beantworten',
    'Smalltalk führen',
    'Konflikte entschärfen',
    'Nein sagen lernen',
    'Bitten äußern',
    'Entschuldigungen annehmen'
  ]

  const screenshots = [
    { src: '/images/Screenshot_20260127_111310.png', alt: 'App Hauptbildschirm' },
    { src: '/images/Screenshot_20260127_111409.png', alt: 'Situationen Auswahl' },
    { src: '/images/Screenshot_20260127_111451.png', alt: 'Antwort Training' },
    { src: '/images/Screenshot_20260127_111513.png', alt: 'Fortschrittsübersicht' },
    { src: '/images/Screenshot_20260127_111530.png', alt: 'Übungsmodus' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="WortGewandt Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-violet-800">WortGewandt</span>
            </div>
            <Button
              className="bg-violet-600 hover:bg-violet-700 text-white"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=app.wortgewandt.tresor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                App Herunterladen
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 rounded-full">
                <Sparkles className="h-4 w-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-700">Worte, die verbinden</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Finden Sie die{' '}
                <span className="text-violet-600">richtigen Worte</span>{' '}
                in jedem Gespräch
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Werden Sie sicherer in Gesprächen und sozialen Situationen. WortGewandt hilft Ihnen, 
                treffsicher zu reagieren und sich selbstbewusst auszudrücken – in jedem Moment, 
                der zählt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-8"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=app.wortgewandt.tresor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Jetzt bei Google Play
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/splash-portrait.png"
                    alt="WortGewandt App"
                    width={300}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full blur-3xl opacity-30 scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Kennen Sie das?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              'Sie wissen nicht, was Sie sagen sollen?',
              'Nach dem Gespräch fallen Ihnen die besseren Antworten ein?',
              'Sie fühlen sich in Gesprächen unsicher?',
              'Schwierige Situationen machen Ihnen zu schaffen?',
              'Sie möchten selbstbewusster auftreten?',
              'Konflikte sind für Sie belastend?'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-violet-50 rounded-xl"
              >
                <div className="w-6 h-6 bg-violet-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-violet-700 text-sm font-medium">{index + 1}</span>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 mt-8">
            <strong className="text-violet-600">WortGewandt</strong> hilft Ihnen, diese Herausforderungen zu meistern 
            und in jeder Situation die passenden Worte zu finden.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-700">
              <Target className="mr-2 h-3 w-3" />
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Das kann WortGewandt für Sie tun
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trainieren Sie Ihre kommunikativen Fähigkeiten und werden Sie zum 
              selbstbewussten Gesprächspartner.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-violet-50/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-5">
                    <feature.icon className="h-7 w-7 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Situations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-700">
                <MessageCircle className="mr-2 h-3 w-3" />
                Gesprächssituationen
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Für jede Situation gewappnet sein
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                WortGewandt bereitet Sie auf die unterschiedlichsten Gesprächssituationen vor. 
                Üben Sie die passenden Reaktionen und werden Sie zum souveränen Kommunikationsprofi.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {situations.map((situation, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-3 bg-violet-50 rounded-lg"
                  >
                    <Sparkles className="h-4 w-4 text-violet-500" />
                    <span className="text-sm text-gray-700">{situation}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/splash-landscape.png"
                alt="WortGewandt Situationen"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-700">
              <Smartphone className="mr-2 h-3 w-3" />
              App Vorschau
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sehen Sie WortGewandt in Aktion
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecken Sie die übersichtliche Oberfläche, die Ihnen hilft, 
              Ihre kommunikativen Fähigkeiten spielerisch zu verbessern.
            </p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-transparent justify-center flex-wrap">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-none snap-center"
              >
                <div className="relative group">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={220}
                    height={440}
                    className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-violet-100 text-violet-700">
              <Target className="mr-2 h-3 w-3" />
              So funktioniert&apos;s
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              In 3 Schritten zum WortGewandten
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'App herunterladen',
                description: 'Laden Sie WortGewandt kostenlos aus dem Google Play Store herunter und installieren Sie es auf Ihrem Android-Gerät.',
                icon: Download
              },
              {
                step: '02',
                title: 'Situation wählen',
                description: 'Wählen Sie aus verschiedenen Gesprächssituationen diejenige aus, die Sie üben möchten – von Alltagskonversationen bis zu schwierigen Gesprächen.',
                icon: Target
              },
              {
                step: '03',
                title: 'Trainieren & Verbessern',
                description: 'Üben Sie passende Reaktionen, erhalten Sie Feedback und verbessern Sie kontinuierlich Ihre kommunikativen Fähigkeiten.',
                icon: Sparkles
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-violet-100 mb-4">{item.step}</div>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 h-8 w-8 text-violet-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-violet-600 to-purple-600 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 bg-grid-white/10" />
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/logo.png"
                    alt="WortGewandt Logo"
                    width={80}
                    height={80}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Bereit, die richtigen Worte zu finden?
                </h2>
                <p className="text-lg text-violet-100 mb-8 max-w-2xl mx-auto">
                  Laden Sie WortGewandt heute herunter und starten Sie Ihre Reise 
                  zu mehr Selbstbewusstsein in Gesprächen. Werden Sie zum Kommunikationsprofi.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-violet-700 hover:bg-violet-50 text-lg px-10"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=app.wortgewandt.tresor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Jetzt kostenlos herunterladen
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="WortGewandt Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">WortGewandt</span>
            </div>
            <p className="text-gray-400 text-center">
              Die richtigen Worte für jede Situation
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=app.wortgewandt.tresor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Smartphone className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} WortGewandt. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
