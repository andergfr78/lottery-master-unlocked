export function FloatingDecorations() {
  const balls = [
    { id: 1, size: 'w-16 h-16', color: 'from-red-500 to-red-600', top: '10%', left: '5%', delay: '0s' },
    { id: 2, size: 'w-12 h-12', color: 'from-yellow-400 to-yellow-500', top: '20%', right: '8%', delay: '0.5s' },
    { id: 3, size: 'w-14 h-14', color: 'from-emerald-500 to-green-600', bottom: '15%', left: '10%', delay: '1s' },
    { id: 4, size: 'w-10 h-10', color: 'from-blue-500 to-blue-600', top: '30%', right: '5%', delay: '1.5s' },
    { id: 5, size: 'w-12 h-12', color: 'from-purple-500 to-purple-600', bottom: '20%', right: '15%', delay: '2s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className={`absolute ${ball.size} rounded-full bg-gradient-to-br ${ball.color} shadow-lg blur-sm opacity-20 floating-ball`}
          style={{
            top: ball.top || 'auto',
            bottom: ball.bottom || 'auto',
            left: ball.left || 'auto',
            right: ball.right || 'auto',
            animationDelay: ball.delay,
          }}
        />
      ))}
    </div>
  );
}

export function StarsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30 sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function GradientOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}
